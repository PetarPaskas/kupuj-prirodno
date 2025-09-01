import ProductDetailIcon from "../../../../shared/product-detail-icon/product-detail-icon";
import SpaceBetweenColumn from "../../../../shared/space-between-column/space-between-column";
import SpaceBetweenRow from "../../../../shared/space-between-column/space-between-row/space-between-row";
import StoreProductGroup from "../../../../shared/store-product-group/store-product-group";
import StoreProductGroupBody from "../../../../shared/store-product-group/store-product-group-body/store-product-group-body";
import StoreProductGroupFooter from "../../../../shared/store-product-group/store-product-group-footer/store-product-group-footer";
import StoreProductGroupHeader from "../../../../shared/store-product-group/store-product-group-header/store-product-group-header";
import StoreProductGroupItems from "../../../../shared/store-product-group/store-product-group-items/store-product-group-items";
import StoreProductGroupLogo from "../../../../shared/store-product-group/store-product-group-logo/store-product-group-logo";
import StoreProductGroupTitle from "../../../../shared/store-product-group/store-product-group-title/store-product-group-title";
import TextButton from "../../../../shared/text-button/Button";
import OrderBasketText from "../../current-basket/order-basket-text/order-basket-text";

interface BasketHistoryItemProps{

}

const BasketHistoryItem = ({}:BasketHistoryItemProps)=>{
    return <div className="order_basket__history_item">
        <StoreProductGroup>
            <StoreProductGroupHeader>
                <StoreProductGroupLogo />
                <StoreProductGroupTitle>Rakic History</StoreProductGroupTitle>
            </StoreProductGroupHeader>
            <StoreProductGroupBody>
                <StoreProductGroupItems>
                    <ProductDetailIcon/>
                    <ProductDetailIcon/>
                    <ProductDetailIcon/>
                    <ProductDetailIcon/>
                </StoreProductGroupItems>
            </StoreProductGroupBody>
            <StoreProductGroupFooter>
                <OrderBasketText className="order_basket__history_cart_text_total">Total: RSD 6500</OrderBasketText>
                <SpaceBetweenColumn>
                    <SpaceBetweenRow>
                        <TextButton>View Details</TextButton>
                        <TextButton>Order Again</TextButton>
                    </SpaceBetweenRow>
                </SpaceBetweenColumn>
            </StoreProductGroupFooter>
        </StoreProductGroup>
    </div>
}

export default BasketHistoryItem;