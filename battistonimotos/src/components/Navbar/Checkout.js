import { collection, query, documentId , getDocs, where, writeBatch, addDoc } from "firebase/firestore"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../service/firebase/FirebaseConfig"
import { useNavigate } from "react-router-dom"


const Checkout = () => {
    
    const { cart, total } = useContext(CartContext)

    const createOrder = async () => {

    const objOrder = {
        buyer: {
            name: 'Marcos Battistoni',
            phone: '122222333',
            email: 'info@mgb.au'
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

        if(stockDb >= prodQuantity){
            batch.update(doc.ref, { stock: stockDb - prodQuantity})
        } else{
            outOfStock.push({ id: doc.id, ...dataDoc})
        }
    })

    if(outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')

        const orderAdded = await addDoc(orderRef, objOrder)

        const { id } = orderAdded
        console.log(id)
    } else {
        console.error('Hay producto fuera de stock')
    }
}
    return(
        <div>
            <h2>Checkout</h2>
            <button onClick={createOrder} >Generar orden de compra</button>
            <h4>Generar formulario de compras</h4>
        </div>
    )
}


export default Checkout