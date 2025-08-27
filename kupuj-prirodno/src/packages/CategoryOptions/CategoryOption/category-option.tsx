import type { CategorySummaryItem } from "../../../shared/types"

interface CategoryOptionProps{
    item:CategorySummaryItem
}

const CategoryOption = ({item}:CategoryOptionProps)=>{
    return <div className="category_item">
        <div className="category_item__icon">
            <span>{item.iconLink}</span>
        </div>
        <div className="category_item__name">
            {item.name}
        </div>
    </div>
}

export default CategoryOption