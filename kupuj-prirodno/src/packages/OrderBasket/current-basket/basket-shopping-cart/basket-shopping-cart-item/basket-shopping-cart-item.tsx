import ProductDetailWitQuantity from "../../../../../shared/product-detail-with-quantity/product-detail-with-quantity";
import StoreProductGroup from "../../../../../shared/store-product-group/store-product-group";
import StoreProductGroupBody from "../../../../../shared/store-product-group/store-product-group-body/store-product-group-body";
import StoreProductGroupCancelButton from "../../../../../shared/store-product-group/store-product-group-cancel-button/store-product-group-cancel-button";
import StoreProductGroupHeader from "../../../../../shared/store-product-group/store-product-group-header/store-product-group-header";
import StoreProductGroupItems from "../../../../../shared/store-product-group/store-product-group-items/store-product-group-items";
import StoreProductGroupLogo from "../../../../../shared/store-product-group/store-product-group-logo/store-product-group-logo";
import StoreProductGroupTitle from "../../../../../shared/store-product-group/store-product-group-title/store-product-group-title";

interface BasketShoppingCartItemProps{

}

const BasketShoppingCartItem = ({}:BasketShoppingCartItemProps)=>{ 

    return <div className="order_basket__shopping_cart_item">
        <StoreProductGroup>
            <StoreProductGroupHeader>
                <StoreProductGroupLogo />
                <StoreProductGroupTitle>Rakic</StoreProductGroupTitle>
                <StoreProductGroupCancelButton>Cancel</StoreProductGroupCancelButton>
            </StoreProductGroupHeader>
            <StoreProductGroupBody>
                <StoreProductGroupItems>
                    <ProductDetailWitQuantity />
                    <ProductDetailWitQuantity />
                    <ProductDetailWitQuantity />
                    <ProductDetailWitQuantity />
                </StoreProductGroupItems>
            </StoreProductGroupBody>
        </StoreProductGroup>
    </div>
}

export default BasketShoppingCartItem;