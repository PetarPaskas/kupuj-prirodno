import type { ProductSummaryItem, StoreSummaryItem } from "../types";
import StoreProductGroupBody from "./store-product-group-body/store-product-group-body";
import StoreProductGroupCancelButton from "./store-product-group-cancel-button/store-product-group-cancel-button";
import StoreProductGroupHeader from "./store-product-group-header/store-product-group-header";
import StoreProductGroupItems from "./store-product-group-items/store-product-group-items";
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
            <StoreProductGroupItems/>
        </StoreProductGroupBody>
    </div>
}

export default StoreProductGroup;