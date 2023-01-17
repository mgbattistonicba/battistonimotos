import './App.css';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Navbar/Button';
import CartWidget from './components/Navbar/CartWidget';
import ItemListContainer from './components/Navbar/ItemListContainer';
import ItemCount from './components/Navbar/ItemCount';
import { useState } from 'react';
import ItemList from './components/Navbar/ItemList';

function App() {
  return (
    <div className="Button">
        <Navbar />
        <Button />
        <ItemListContainer greeting={""} />
        <ItemCount />
        <ItemList />
        <CartWidget />
    </div>
   
  );
  
}

export default App;
