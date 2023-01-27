import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Navbar/ItemDetailContainer';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="app">
      <CartProvider>   
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Productos destacados"} />} />
            <Route path='category/:categoryId' element={<ItemListContainer greeting={"Productos filtrados"} />} />
            <Route path='Detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>

  );

}

export default App;
