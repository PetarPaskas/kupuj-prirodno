import type { ProductSummaryItem, StoreSummaryItem } from "../types";

interface StoreProductGroupProps{
    storeInfo?:StoreSummaryItem,
    products?:ProductSummaryItem[],
    children:React.ReactNode
}

const StoreProductGroup = ({children}:StoreProductGroupProps)=>{
    return <div className="store_product_group">
        {children}
    </div>
}

export default StoreProductGroup;