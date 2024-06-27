import Producto from "./Producto";

function Products() {
    return (
        <section className="products">
            <h1>Productos destacados</h1>
            <div className="product-grid">
                <Producto
                    imagen="https://vulkeyewear.com/img/productos/6669e723e4db5c23183ecec59.jpg"
                    nombre="Discuss"
                    precio={76900}
                />
                <Producto
                    imagen="https://vulkeyewear.com/img/productos/6581f9475439976aaf25b9227.jpg"
                    nombre="V.V"
                    precio={103000}
                />
                <Producto
                    imagen="https://vulkeyewear.com/img/productos/6669eb4fe00810c3c8290ec3c.jpg"
                    nombre="Sexyness by Samot"
                    precio={83000}
                />
                <Producto
                    imagen="https://vulkeyewear.com/img/productos/6661b3f2a2c41b4b9905ef124.jpg"
                    nombre="Bold look"
                    precio={68500}
                />
            </div>
        </section>
    )
}

export default Products