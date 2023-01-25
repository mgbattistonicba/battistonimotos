import './App.css';
import { useState, createContext } from 'react';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Navbar/ItemDetailContainer';

export const CartContext = createContext()

function App() {

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

  return (
    <div className="app">
      <CartContext.Provider value={[addItem, isInCart]}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Productos destacados"} />} />
            <Route path='category/:categoryId' element={<ItemListContainer greeting={"Productos filtrados"} />} />
            <Route path='Detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>

  );

}

export default App;
