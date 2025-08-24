import StoreCategories from "../../packages/StoreCategories/store-categories";
import StoreProductResults from "../../packages/StoreProductResults/store-product-results";
import { getLocalStoreCategories, getLocalStores } from "../../shared/mock-data";

interface StoresOverviewProps{

}
const StoresOverview = ({}:StoresOverviewProps)=>{
    const storecategories = getLocalStoreCategories();
    const stores = getLocalStores();
    
    return <div>
        <div className="content_center">
            <StoreCategories 
                categories={storecategories}
            />
            <StoreProductResults
                stores={stores}
            />
        </div>
    </div>
}

export default StoresOverview;