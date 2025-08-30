import type { CategorySummaryItem } from "../../../shared/types"

interface CategoryOptionProps{
    item:CategorySummaryItem
}

const CategoryOption = ({item}:CategoryOptionProps)=>{
    return <div className="category_options__category_item">
        <div className="category_options__category_item_icon">
            <span>{item.iconLink}</span>
        </div>
        <div className="category_options__category_item_name">
            {item.name}
        </div>
    </div>
}

export default CategoryOption