import './App.css';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Navbar/Button';
import CartWidget from './components/Navbar/CartWidget';
import ItemListContainer from './components/Navbar/ItemListContainer';
import ItemCount from './components/Navbar/ItemCount';

function App() {
  return (
    <div className="Button">
        <Navbar />
        <ItemListContainer greeting={""} />
        <ItemCount />
        <Button handleClick={() => console.log('Motos')} >
          Motos
        </Button>
        <Button handleClick={() => console.log('Accesorios')} >
          Accesorios
        </Button>
        <Button handleClick={() => console.log('Contacto')}>
           Contacto 
        </Button>
        <CartWidget />
    </div>
   
  );
  
}

export default App;
