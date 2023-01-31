import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Checkout = () => {

    const { cart, total } = useContext(CartContext)

    const objOrder = {
        buyer: {
            name: 'Marcos Battistoni',
            phone: '122222333',
            email: 'info@mgb.au'
        }, 
        item: cart,
        total
    }


    return(
        <div>
            <h2>Checkout</h2>
        </div>
    )
}


export default Checkout