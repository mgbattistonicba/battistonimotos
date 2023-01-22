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
          <NavLink to={`/category/Moto`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Moto</NavLink>
          <NavLink to={`/category/Accesorio`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Accesorio</NavLink>
          <NavLink to={`/category/Contacto`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Contacto</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar