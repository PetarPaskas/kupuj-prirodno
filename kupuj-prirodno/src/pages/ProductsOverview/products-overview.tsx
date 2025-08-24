import ProductsInStoreList from "../../packages/ProductsInStoreList/products-in-store-list";
import { getLocarStoreProductsByCategories } from "../../shared/mock-data";

interface ProductsOverviewProps{

}
const ProductsOverview = ({}:ProductsOverviewProps)=>{
    const categorizedStoreProducts = getLocarStoreProductsByCategories();

    return <div className="content_center">
        <div className="products_overview">
            <ProductsInStoreList 
            categorizedStoreProducts={categorizedStoreProducts}/>
        </div>
    </div>
}

export default ProductsOverview;
