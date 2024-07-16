import Product from "../Product/Product"


const ProductList = ({products}) => {
    return (
        <div className="product-grid">
            {products.map(prod => {
                return <Product key={prod.id} {...prod}/>
            })}
        </div>
    )
}

export default ProductList