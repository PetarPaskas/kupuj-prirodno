import type { StoreSummary } from "../../shared/types"
import StoreProductList from "./StoreProductList/store-product-list"

interface StoreProductResultsProps{
    stores:StoreSummary
}

const StoreProductResults = ({stores}:StoreProductResultsProps)=>{

    return <div className="store_product_results">
        <StoreProductList items={stores.items}/>
    </div>
}

export default StoreProductResults 