import { useState, createContext } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (producToAdd) => {
        if (!isInCart(producToAdd.id)) {
          setCart(prev => {
            console.log(prev)
            return [...prev, producToAdd]
          })
        } else {
          console.error("Ya esta en el carrito")
        }
      }

      const isInCart = (id) => cart.some(prod => id === prod.id)

      const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu

      }

      const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        return total
      }

      const totalQuantity = getTotalQuantity()

      const total = getTotal()

    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, totalQuantity }}>
        {children} 
        </CartContext.Provider>
    )

}