import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/Navbar/ItemListContainer';
import ItemDetailContainer from '../components/Navbar/ItemDetailContainer';
import CartContainer from '../components/Navbar/CartContainer';
import Checkout from '../components/Navbar/Checkout';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Productos destacados"} />} />
            <Route path='category/:categoryId' element={<ItemListContainer greeting={"Productos filtrados"} />} />
            <Route path='Detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/Cart' element={<CartContainer />} />
            <Route path='/Checkout' element={<Checkout />} />
        </Routes>
    )
}

export default AppRouter