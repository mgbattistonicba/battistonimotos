import { useState } from "react"

const ItemCount = ({onAdd}) => {
    const [count, setCount]= useState(0)

    const decrement = () =>{
        for(let i = 0; i < 0; i--) {
        setCount(prev =>{
        return prev - 1
        } )
        }

    return
    }

    const increment = () =>{
        for(let i = 0; i < 0; i++) {
            setCount(prev => {
            return prev + 1
            })
            }
    
        return
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount