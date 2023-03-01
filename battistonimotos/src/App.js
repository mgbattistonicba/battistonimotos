import './App.css';
import NavBar from './components/Navbar/Navbar';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './context/Notification';
import AppRouter from './routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <AppRouter />
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>

  );

}

export default App;
