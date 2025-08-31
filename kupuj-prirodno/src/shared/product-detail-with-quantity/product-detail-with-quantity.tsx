import ProductDetail from "./product-detail/product-detail";
import QuantityStepper from "../quantity-stepper/quantity-stepper";

interface ProductDetailWitQuantityProps{

}

const ProductDetailWitQuantity = ({}:ProductDetailWitQuantityProps)=>{
    return <div className="product_detail_with_quantity">
        <ProductDetail/>
        <div className="product_quantity">
            <QuantityStepper step={1} startValue={1}/>
        </div>
    </div>
}

export default ProductDetailWitQuantity;