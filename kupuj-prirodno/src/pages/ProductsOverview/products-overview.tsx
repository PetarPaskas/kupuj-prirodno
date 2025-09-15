import ProductsInStoreList from "../../packages/ProductsInStoreList/products-in-store-list";
import CategoryOptions from "../../packages/CategoryOptions/CategoryOptions";
import { getLocalStoreCategories, getLocarStoreProductsByCategories } from "../../shared/mock-data";
import SearchBox from "../../shared/search-box/search-box";

interface ProductsOverviewProps{

}
const ProductsOverview = ({}:ProductsOverviewProps)=>{
    const categorizedStoreProducts = getLocarStoreProductsByCategories();
    const storecategories = getLocalStoreCategories();
    
    return <div className="content_center">
        <div className="products_overview track">
            <div className="products_overview__left_side track__left">
                <CategoryOptions 
                    categories={storecategories}
                />
            </div>
            <div className="products_overview__main track__main">
                <SearchBox/>
                <ProductsInStoreList 
                    categorizedStoreProducts={categorizedStoreProducts}
                />
            </div>

        </div>
    </div>
}

export default ProductsOverview;
