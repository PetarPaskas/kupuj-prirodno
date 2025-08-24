import GridListContainer from "../../../shared/GridList/grid-list";
import GridListItem from "../../../shared/GridList/GridListItem/grid-list-item";
import SectionTitle from "../../../shared/SectionTitle/section-title";
import type { ProductByCategory } from "../../../shared/types";
import ProductCard from "../../ProductCard/product-card";

interface ProductsSectionProps{
    productsInCategory:ProductByCategory
}

const ProductsSection = ({productsInCategory}:ProductsSectionProps)=>{
    const renderProductsInCategory = ()=>{
        return productsInCategory.products.map((product, index)=>{
            return (
                <GridListItem key={index}>
                    <ProductCard product={product}/>
                </GridListItem>
            );
        })
    }

    return <div className="products__section">
        <SectionTitle>{productsInCategory.category.name}</SectionTitle>
        <GridListContainer>
            {renderProductsInCategory()}
        </GridListContainer>
    </div>
}

export default ProductsSection;
