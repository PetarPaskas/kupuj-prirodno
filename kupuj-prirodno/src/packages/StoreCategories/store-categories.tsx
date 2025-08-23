import type { StoreCategoryType } from "../../shared/types";
import StoreCategory from "./StoreCategory/store-category";

interface StoreCategoriesProps{
    categories: StoreCategoryType[]
}

const StoreCategories = ({categories}:StoreCategoriesProps)=>{

    const renderStoreCategories = ()=>categories.map((category, index)=>{
        return <StoreCategory key={index} storeCategory={category}/>
    });

    return (
    <div className="store_categories">
        {renderStoreCategories()}
    </div>
    );
}

export default StoreCategories 