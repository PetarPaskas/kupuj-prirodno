import ProductsInStoreList from "../../packages/ProductsInStoreList/products-in-store-list";
import CategoryOptions from "../../packages/CategoryOptions/CategoryOptions";
import { getLocalStoreCategories, getLocarStoreProductsByCategories } from "../../shared/mock-data";

interface ProductsOverviewProps{

}
const ProductsOverview = ({}:ProductsOverviewProps)=>{
    const categorizedStoreProducts = getLocarStoreProductsByCategories();
    const storecategories = getLocalStoreCategories();
    
    return <div className="content_center">
        <div className="products_overview">
            <CategoryOptions 
                categories={storecategories}
            />
            <ProductsInStoreList 
            categorizedStoreProducts={categorizedStoreProducts}/>
        </div>
    </div>
}

export default ProductsOverview;
