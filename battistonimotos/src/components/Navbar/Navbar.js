import { NavLink, Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './Navbar.css'

import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <nav className="NavBar" >
          <h1 onClick={() => navigate('/')}>Battistoni Motos</h1>
        <div className="Categories">
          <NavLink to={`/category/Motos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Motos</NavLink>
          <NavLink to={`/category/Accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
          <NavLink to={`/category/Cascos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cascos</NavLink>
          <NavLink to={`/category/Contacto`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Contacto</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar