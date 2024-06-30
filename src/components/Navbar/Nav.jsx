import CartWidget from "../CartWidget/Cartwidget"

function Nav({ cartCount }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg border-body align-items-center" data-bs-theme="dark">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="#">Rocktica</a>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav d-flex align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Antejos de sol</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Anteojos de receta</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Productos destacados</a>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link" aria-current="page" href="#"><CartWidget cartCount={cartCount}/></span>
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