import type { ProductSummaryItem } from "../../../shared/types"

interface ProductDescriptionProps{
    product:ProductSummaryItem
}

const ProductDescription = ({product}:ProductDescriptionProps)=>{
    return <p className="product_description">
        <span className="product_description__title">{product.name}</span>
        <span className="product_description__description">{product.description}</span>
    </p>
}

export default ProductDescription