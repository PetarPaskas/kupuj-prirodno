import type { ProductSummaryItem, StoreSummaryItem } from "../types";

interface StoreProductGroupProps{
    storeInfo?:StoreSummaryItem,
    products?:ProductSummaryItem[]
}

const StoreProductGroup = ({}:StoreProductGroupProps)=>{
    return <div className="store_product_group">
        StoreProductGroup
    </div>
}

export default StoreProductGroup;