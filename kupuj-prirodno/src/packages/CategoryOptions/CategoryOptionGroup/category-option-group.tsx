import type { CategorySummary } from "../../../shared/types"
import CategoryOption from "../CategoryOption/category-option"

interface CategoryOptionGroupProps{
    categorySummary:CategorySummary
}

const CategoryOptionGroup = ({categorySummary}:CategoryOptionGroupProps)=>{

    const renderCategoryOptionItems = ()=>categorySummary.items.map((item,index)=>{
        return (<li key={index}>
            <CategoryOption item={item}/>
        </li>)
    });

    return <div className="category">
        <div className="category__title">
            <span>{categorySummary.categoryName}</span>
        </div>
        <ul className="category__items">
            {renderCategoryOptionItems()}
        </ul>
    </div>
}

export default CategoryOptionGroup