import CartWidget from "../CartWidget/Cartwidget"

function Nav({cartCount}) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="#">Rocktica</a>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Eyewear</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <CartWidget cartCount={cartCount}/>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Nav