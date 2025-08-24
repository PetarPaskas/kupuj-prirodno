import Card from "../../shared/card/card";
import CardBody from "../../shared/card/CardBody/card-body";
import CardHeader from "../../shared/card/CardHeader/card-header";
import CardHeaderImageCover from "../../shared/card/CardHeaderImageCover/card-header-image-cover";
import type { ProductSummaryItem } from "../../shared/types";
import ProductDescription from "./ProductDescription/product-description";

interface ProductCardProps{
    product:ProductSummaryItem
}

const ProductCard = ({product}:ProductCardProps)=>{
    
    return <Card>
        <CardHeader>
            <CardHeaderImageCover src={product.coverImage}/>
        </CardHeader>
        <CardBody>
            <ProductDescription product={product}/>
        </CardBody>
    </Card>
}

export default ProductCard;