const ItemList = ( products ) => {
    return (
        <ul>
            {products.map(prod => <li key={prod.id} >{prod.name}</li>)}
        </ul>
    )

}

export default ItemList