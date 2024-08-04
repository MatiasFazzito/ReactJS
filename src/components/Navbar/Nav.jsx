import CartWidget from "../CartWidget/Cartwidget"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg border-body align-items-center" data-bs-theme="dark">
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="navbar-brand" to="/">Rocktica</Link>
                    <div className="navbarMenu">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav d-flex align-items-center">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category/sol">Antejos de sol</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category/receta">Anteojos de receta</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category/destacados">Productos destacados</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link cart" to="/cart/"><CartWidget /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Nav