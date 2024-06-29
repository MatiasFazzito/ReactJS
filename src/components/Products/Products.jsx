import Product from "./Product";

function Products({ greeting }) {
    return (
        <section className="products">
            <h1>{greeting}</h1>
            <div className="product-grid">
                <Product
                    imagen="https://vulkeyewear.com/img/productos/6669e723e4db5c23183ecec59.jpg"
                    nombre="Discuss"
                    precio={"$" + 76900}
                />
                <Product
                    imagen="https://vulkeyewear.com/img/productos/6581f9475439976aaf25b9227.jpg"
                    nombre="V.V"
                    precio={"$" + 103000}
                />
                <Product
                    imagen="https://vulkeyewear.com/img/productos/6669eb4fe00810c3c8290ec3c.jpg"
                    nombre="Sexyness by Samot"
                    precio={"$" + 83000}
                />
                <Product
                    imagen="https://vulkeyewear.com/img/productos/6661b3f2a2c41b4b9905ef124.jpg"
                    nombre="Dupils"
                    precio={"$" + 103800}
                />
                <Product
                    imagen="https://vulkeyewear.com/img/productos/654a5ab45d0c73dbed9e6447f.jpg"
                    nombre="Collins"
                    precio={"$" + 180000}
                />
                <Product
                    imagen="https://vulkeyewear.com/img/productos/637e3aed48e6a1de0de83fe6f.jpg"
                    nombre="Pretend"
                    precio={"$" + 76900}
                />
                <Product
                    imagen="https://vulkeyewear.com/img/productos/65e0c7e76668b93fa5ca84290.jpg"
                    nombre="Thunver"
                    precio={"$" + 68500}
                />
                <Product
                    imagen="https://vulkeyewear.com/img/productos/65e0a2f34e0f03c870abddc88.jpg"
                    nombre="Doct"
                    precio={"$" + 78900}
                />
                <Product
                    imagen="https://vulkeyewear.com/img/productos/65e095a5493fd1780184797bd.jpg"
                    nombre="Dictation"
                    precio={"$" + 80000}
                />
                <Product
                    imagen="https://vulkeyewear.com/img/productos/65e092275729619c060bcb17a.jpg"
                    nombre="Discuss"
                    precio={"$" + 70000}
                />
                <Product
                    imagen="https://vulkeyewear.com/img/productos/6581a253babb5e7ee9d51676f.jpg"
                    nombre="I See Optical"
                    precio={"$" + 105000}
                />
                <Product
                    imagen="https://vulkeyewear.com/img/productos/63f8dd2eecd2fa2ceafa58436.jpg"
                    nombre="Prevus"
                    precio={"$" + 95000}
                />
            </div>
        </section>
    )
}

export default Products