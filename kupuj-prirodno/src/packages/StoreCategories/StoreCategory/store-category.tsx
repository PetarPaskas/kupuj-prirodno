import type { StoreCategoryType } from "../../../shared/types"
import StoreCategoryItem from "../StoreCategoryItem/store-category-item"

interface StoreCategoryProps{
    storeCategory:StoreCategoryType
}

const StoreCategory = ({storeCategory}:StoreCategoryProps)=>{

    const renderStoreCategoryItems = ()=>storeCategory.items.map((item,index)=>{
        return (<li key={index}>
            <StoreCategoryItem item={item}/>
        </li>)
    });

    return <div className="store_category">
        <div className="store_category__title">
            <span>{storeCategory.categoryName}</span>
        </div>
        <ul className="store_category__items">
            {renderStoreCategoryItems()}
        </ul>
    </div>
}

export default StoreCategory