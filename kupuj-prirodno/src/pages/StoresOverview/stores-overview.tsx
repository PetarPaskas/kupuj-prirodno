import CategoryOptions from "../../packages/CategoryOptions/CategoryOptions";
import StoreProductResults from "../../packages/StoreProductResults/store-product-results";
import { getLocalStoreCategories, getLocalStores } from "../../shared/mock-data";
import SearchBox from "../../shared/search-box/search-box";

interface StoresOverviewProps{

}

const StoresOverview = ({}:StoresOverviewProps)=>{
    const storecategories = getLocalStoreCategories();
    const stores = getLocalStores();
    
    return <div className="content_center">
        <div className="stores_overview track">
            <div className="stores_overview__left_side track__left">
                <CategoryOptions 
                    categories={storecategories}
                />
            </div>
            <div className="stores_overview__main track__main">
                <SearchBox/>
                <StoreProductResults
                    stores={stores}
                />
            </div>

        </div>
    </div>
}

export default StoresOverview;