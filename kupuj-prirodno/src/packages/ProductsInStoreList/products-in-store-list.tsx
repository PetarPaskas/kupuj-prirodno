import type { ProductsInStore } from "../../shared/types";
import ProductsSection from "./ProductsSection/products-section";

interface ProductsInStoreListProps{
    categorizedStoreProducts: ProductsInStore
}

const ProductsInStoreList = ({categorizedStoreProducts}:ProductsInStoreListProps)=>{

    return <div className="products_content">
        {categorizedStoreProducts.map((productsInCategory, index)=>{
            return <ProductsSection 
                key={index} 
                productsInCategory={productsInCategory}/>;
        })}
    </div>

}

export default ProductsInStoreList;
