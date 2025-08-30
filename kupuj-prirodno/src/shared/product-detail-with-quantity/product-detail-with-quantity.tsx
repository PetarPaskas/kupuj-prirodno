import ProductDetail from "./product-detail/product-detail";

interface ProductDetailWitQuantityProps{

}

const ProductDetailWitQuantity = ({}:ProductDetailWitQuantityProps)=>{
    return <div className="product_detail_with_quantity">
        <ProductDetail/>
        <div className="product_quantity">
            
        </div>
    </div>
}

export default ProductDetailWitQuantity;