import SpaceBetweenColumn from "../../../../shared/space-between-column/space-between-column";
import SpaceBetweenRow from "../../../../shared/space-between-column/space-between-row/space-between-row";
import TextButton from "../../../../shared/text-button/Button";

interface BasketCheckoutProps{

}

const BasketCheckout = ({}:BasketCheckoutProps)=>{
    return <div className="order_basket__checkout">
        <SpaceBetweenColumn>
            <SpaceBetweenRow>
                <span className="order_basket__text">Total</span>
                <span className="order_basket__text">RSD 6500</span>
            </SpaceBetweenRow>
            <SpaceBetweenRow>
                <TextButton>Clear all items</TextButton>
                <TextButton>To checkout</TextButton>
            </SpaceBetweenRow>
        </SpaceBetweenColumn>
 
    </div>
}

export default BasketCheckout;