import { memo } from "react"
import Product from "../Product/Product"

const ProductList = ({ products }) => {
    return (
        <div className="productList">
            {products.map(prod => {
                return <Product key={prod.id} {...prod} />
                
            })}
        </div>
    )
}

export default memo(ProductList)