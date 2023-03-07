import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget =({ totalQuantity } ) => {
    return(
        <Link to='/Cart' className="CartWidget" >
            <img className="carrito" src= './images/carrito.svg' alt='cart-widget'/>
            { totalQuantity }
        </Link>
    )

}

export default CartWidget