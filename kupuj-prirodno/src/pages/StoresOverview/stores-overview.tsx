import StoreCard from "../../packages/StoreCard/store-card";
import StoreCategories from "../../packages/StoreCategories/store-categories";
import StoreProductResults from "../../packages/StoreProductResults/store-product-results";
import { getLocalStoreCategories } from "../../shared/mock-data";

interface StoresOverviewProps{

}
const StoresOverview = ({}:StoresOverviewProps)=>{
    const storecategories = getLocalStoreCategories();
    
    return <div>
        <div className="content_center">
            <StoreCategories 
                categories={storecategories}
            />
            <StoreProductResults/>
        </div>
    </div>
}

export default StoresOverview;