import "./ItemListContainer.css"
import { useEffect } from "react"

const ItemListContainer = ({greeting}) => {
return(
    <div className="ItemListContainer">
        <h1>{greeting}</h1>
    </div>
)
}

export default ItemListContainer