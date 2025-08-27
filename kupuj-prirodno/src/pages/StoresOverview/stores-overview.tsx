import CategoryOptions from "../../packages/CategoryOptions/CategoryOptions";
import StoreProductResults from "../../packages/StoreProductResults/store-product-results";
import { getLocalStoreCategories, getLocalStores } from "../../shared/mock-data";

interface StoresOverviewProps{

}

const StoresOverview = ({}:StoresOverviewProps)=>{
    const storecategories = getLocalStoreCategories();
    const stores = getLocalStores();
    
    return <div className="content_center">
        <div className="stores_overview">
            <CategoryOptions 
                categories={storecategories}
            />
            <StoreProductResults
                stores={stores}
            />
        </div>
    </div>
}

export default StoresOverview;