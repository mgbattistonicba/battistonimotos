import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"



const CartContainer = () => {
    const { cart } = useContext(CartContext)

    return (
        <div>
            <h2>Estos son los productos de tu carrito</h2>
            <div>
                {
                    cart.map(prod => {
                        return(
                            <h3 key={prod.id} >{prod.name}</h3>
                        )
                    })
                }
            </div>
            <Link to='/Checkout'>Checkout</Link>
        </div>

    )
}

export default CartContainer