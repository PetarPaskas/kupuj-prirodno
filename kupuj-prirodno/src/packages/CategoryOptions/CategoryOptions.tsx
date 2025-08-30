import type { CategorySummary } from "../../shared/types";
import CategoryOptionGroup from "./CategoryOptionGroup/category-option-group";

interface CategoryOptionsProps{
    categories: CategorySummary[]
}

const CategoryOptions = ({categories}:CategoryOptionsProps)=>{

    const renderCategories = ()=>categories.map((category, index)=>{
        return <CategoryOptionGroup key={index} categorySummary={category}/>
    });

    return (
    <div className="category_options__container">
        {renderCategories()}
    </div>
    );
}

export default CategoryOptions 