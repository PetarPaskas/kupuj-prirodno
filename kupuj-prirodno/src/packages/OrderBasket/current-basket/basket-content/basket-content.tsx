import StoreProductGroup from "../../../../shared/store-product-group/store-product-group";

interface BasketContentProps{

}

const BasketContent = ({}:BasketContentProps)=>{
    return <div className="order_basket__content">
        basket content
        <StoreProductGroup />
    </div>
}

export default BasketContent;