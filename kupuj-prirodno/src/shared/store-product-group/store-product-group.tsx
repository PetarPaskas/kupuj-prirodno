import ProductDetailWitQuantity from "../product-detail-with-quantity/product-detail-with-quantity";
import type { ProductSummaryItem, StoreSummaryItem } from "../types";
import StoreProductGroupBody from "./store-product-group-body/store-product-group-body";
import StoreProductGroupCancelButton from "./store-product-group-cancel-button/store-product-group-cancel-button";
import StoreProductGroupHeader from "./store-product-group-header/store-product-group-header";
import StoreProductGroupTitle from "./store-product-group-title/store-product-group-title";

interface StoreProductGroupProps{
    storeInfo?:StoreSummaryItem,
    products?:ProductSummaryItem[]
}

const StoreProductGroup = ({}:StoreProductGroupProps)=>{
    return <div className="store_product_group">
        <StoreProductGroupHeader>
            <div className="store_product_group__logo"></div>
            <StoreProductGroupTitle>Rakic</StoreProductGroupTitle>
            <StoreProductGroupCancelButton>Cancel</StoreProductGroupCancelButton>
        </StoreProductGroupHeader>
        <StoreProductGroupBody>
            <ul className="store_product_group__items">
                <li className="store_product_group__item">
                    <ProductDetailWitQuantity/>
                </li>
                <li className="store_product_group__item">
                    <ProductDetailWitQuantity/>
                </li>
                <li className="store_product_group__item">
                    <ProductDetailWitQuantity/>
                </li>
                <li className="store_product_group__item">
                    <ProductDetailWitQuantity/>
                </li>
            </ul>
        </StoreProductGroupBody>
    </div>
}

export default StoreProductGroup;