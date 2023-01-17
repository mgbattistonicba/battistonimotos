import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "./ItemList"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]) 

    useEffect(() => {
        getProducts().then(productsFromApi => {
            setProducts(productsFromApi)
        })
    }, [])
    //console.log(products)
    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer