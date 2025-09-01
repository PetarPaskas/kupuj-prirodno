import BasketCheckout from "./basket-checkout/basket-checkout";
import BasketShoppingCart from "./basket-shopping-cart/basket-shopping-cart";

interface CurrentBasketProps{

}

const CurrentBasket = ({}:CurrentBasketProps)=>{
    return <>
        <BasketShoppingCart />
        <BasketCheckout />
    </>;
}

export default CurrentBasket;