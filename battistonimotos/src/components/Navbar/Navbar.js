import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="title">BattiMotos</h1>
            <div className="button">
                <button>Motos</button>
                <button>Accesorios</button>
                <button>Repuestos</button>
            </div>
        </nav>
    )

}

export default Navbar