import { collection, query, documentId, getDocs, where, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../service/firebase/FirebaseConfig"
import { useNavigate } from "react-router-dom"


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async (name, phone, email) => {
        setLoading(true)

        try {

            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                item: cart,
                total
            }

            const batch = writeBatch(db)

            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const productsAddedToCartFromFirestore = await getDocs(productsRef)

            const { docs } = productsAddedToCartFromFirestore

            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                const { id } = orderAdded

                setOrderId(id)
                
                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)

                console.log(id)
            } else {
                console.error('Hay producto fuera de stock')
            }
        } catch (error) {
           
        }finally {
            setLoading(false)
        }
        
    }


    if (loading) {
        return <h4>Generando orden...</h4>
    }

    if(cart.length === 0) {
        return (
            <h3>No hay productos en el carrito</h3>
        )
    }


    return (
        <div>
            <h2>Checkout</h2>

           {/* <Form onGenerateOrder={createOrder} />}
           {/* este button va dentro del form*/}
            <button onClick={createOrder} >Generar orden de compra</button>
        </div>

    )
}


export default Checkout