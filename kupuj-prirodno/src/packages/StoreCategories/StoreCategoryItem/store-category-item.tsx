import type { StoreCategoryItemType } from "../../../shared/types"

interface StoreCategoryItemProps{
    item:StoreCategoryItemType
}

const StoreCategoryItem = ({item}:StoreCategoryItemProps)=>{
    return <div className="store_category_item">
        <div className="store_category_item__icon">
            <span>{item.iconLink}</span>
        </div>
        <div className="store_category_item__name">
            {item.name}
        </div>
    </div>
}

export default StoreCategoryItem