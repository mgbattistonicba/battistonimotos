import "./Navbar.css"
import "./CartWidget"
import Button from "./Button"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="title">Battistoni Motos</h1>
            <Button handleClick={() => console.log('Motos')} >
                Motos
            </Button>
            <Button handleClick={() => console.log('Accesorios')} >
                Accesorios
            </Button>
            <Button handleClick={() => console.log('Contacto')}>
                Contacto
            </Button>
        </nav>

    )

}

export default Navbar