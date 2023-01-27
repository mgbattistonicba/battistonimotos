import './CartWidget.css'

const CartWidget =({ totalQuantity } ) => {
    return(
        <div className="CartWidget" >
            <img className="carrito" src='./images/carrito.svg' alt='cart-widget'/>
            { totalQuantity }
        </div>
    )

}

export default CartWidget