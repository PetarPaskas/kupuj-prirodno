import BasketCheckout from "./basket-checkout/basket-checkout";
import BasketContent from "./basket-content/basket-content";

interface CurrentBasketProps{

}

const CurrentBasket = ({}:CurrentBasketProps)=>{
    return <div>
        <BasketContent />
        <BasketCheckout />
    </div>
}

export default CurrentBasket;