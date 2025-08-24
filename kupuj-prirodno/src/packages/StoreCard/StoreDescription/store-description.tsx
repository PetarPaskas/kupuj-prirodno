import type { StoreSummaryItem } from "../../../shared/types"

interface StoreDescriptionProps{
    store:StoreSummaryItem
}

const StoreDescription = ({store}:StoreDescriptionProps)=>{
    return <p className="store_description">
        <span className="store_description__title">{store.title}</span>
        <span className="store_description__description">{store.shortDescription}</span>
    </p>
}

export default StoreDescription