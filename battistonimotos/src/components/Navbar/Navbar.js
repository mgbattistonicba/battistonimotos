import { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const NavBar = () => {

  const navigate = useNavigate()

  const { totalQuantity } = useContext(CartContext)

  return (
    <nav className="NavBar" >
          <h1 onClick={() => navigate('/')}>Battistoni Motos</h1>
        <div className="Categories">
          <NavLink to={`/category/Motos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Motos</NavLink>
          <NavLink to={`/category/Accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
          <NavLink to={`/category/Cascos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cascos</NavLink>
          <NavLink to={`/category/Contacto`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Contacto</NavLink>
        </div>
        <CartWidget totalQuantity={totalQuantity} />
    </nav>
  )
}

export default NavBar