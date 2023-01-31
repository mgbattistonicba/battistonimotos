import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer';
import Checkout from './components/Navbar/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Navbar/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './context/Notification';
import CartContainer from './components/Navbar/CartContainer';


function App() {
  return (
    <div className="app">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Productos destacados"} />} />
              <Route path='category/:categoryId' element={<ItemListContainer greeting={"Productos filtrados"} />} />
              <Route path='Detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/Cart' element={<CartContainer />} />
              <Route path='/Checkout' element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>

  );

}

export default App;
