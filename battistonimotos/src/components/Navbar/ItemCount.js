import { useState } from 'react'

const ItemCount = () => {
    const [count, setCount]= useState(10)

    const decrement = () =>{
       setCount(count - 1)
    }

    const increment = () =>{
        setCount(count + 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onclick={decrement}>-</button>
            <button onclick={increment}>+</button>
        </div>
    )
}

export default ItemCount