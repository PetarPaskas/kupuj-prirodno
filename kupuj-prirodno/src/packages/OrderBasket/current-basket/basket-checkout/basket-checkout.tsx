import SpaceBetweenColumn from "../../../../shared/space-between-column/space-between-column";
import SpaceBetweenRow from "../../../../shared/space-between-column/space-between-row/space-between-row";
import TextButton from "../../../../shared/text-button/Button";
import OrderBasketText from "../order-basket-text/order-basket-text";

interface BasketCheckoutProps{

}

const BasketCheckout = ({}:BasketCheckoutProps)=>{
    return <div className="order_basket__checkout">
        <SpaceBetweenColumn>
            <SpaceBetweenRow>
                <OrderBasketText>Total</OrderBasketText>
                <OrderBasketText>RSD 6500</OrderBasketText>
            </SpaceBetweenRow>
            <SpaceBetweenRow>
                <TextButton>Clear all items</TextButton>
                <TextButton>To checkout</TextButton>
            </SpaceBetweenRow>
        </SpaceBetweenColumn>
 
    </div>
}

export default BasketCheckout;