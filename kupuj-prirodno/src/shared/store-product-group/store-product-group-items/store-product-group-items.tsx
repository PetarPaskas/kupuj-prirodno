import ProductDetailWitQuantity from "../../product-detail-with-quantity/product-detail-with-quantity"

interface StoreProductGroupItemsProps{

}
const StoreProductGroupItems = ({}:StoreProductGroupItemsProps)=>{

    const renderItems = ()=>{
        return [1,2,3,4].map((item, index)=>{
            return <li key={index} className="store_product_group__item">
                <ProductDetailWitQuantity/>
            </li>
        })
    }

    return  <ul className="store_product_group__items">
                {renderItems()}
            </ul>
} 

export default StoreProductGroupItems;