import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase/FirebaseConfig'

import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        document.title = 'Detalle del producto'
    }, [])

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response =>{
            const data = response.data()
            const productsAdapted = { id: response.id, ...data}
            setProduct(productsAdapted)
        }).catch(error => {}).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <h1>Detalle {product.name}</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
