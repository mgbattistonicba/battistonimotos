import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../service/firebase/FirebaseConfig"

import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const onResize = (event) => {
            
        }

        const onResize2 = () => {
           
        }

        window.addEventListener('resize', onResize)
        window.addEventListener('resize', onResize2)

        return () => {
            window.removeEventListener('resize', onResize) 
            window.removeEventListener('resize', onResize2)
        }
    }, [])

    useEffect(() => {
        document.title = 'Todos los productos'
    }, [])

    useEffect(() => {
        setLoading(true)

        const collectionRef =categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()

                return { id: doc.id, ...data}
            }) 

            setProducts(productsAdapted)
        }).catch(error => {}).finally(() => {
            setLoading(false)
        })
    }, [categoryId])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <div className='ItemListContainer' onClick={() => console.log('hice click en itemlistcontainer')}>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer