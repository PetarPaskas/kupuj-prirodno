import GridListContainer from "../../../shared/GridList/grid-list";
import GridListItem from "../../../shared/GridList/GridListItem/grid-list-item";
import SectionTitle from "../../../shared/SectionTitle/section-title";
import type { StoreSummaryItem } from "../../../shared/types";
import StoreCard from "../../StoreCard/store-card";

interface StoreProductListProps{
    items:StoreSummaryItem[]
}

const StoreProductList = ({items}:StoreProductListProps)=>{

    const renderStores = ()=>{
        return items.map((store,index)=>{
                return <GridListItem key={index}>
                    <StoreCard store={store}/>
                </GridListItem>
            });
        }

    return <div className="store_product_list">
        <SectionTitle>All products</SectionTitle>
        <GridListContainer>
            {renderStores()}
        </GridListContainer>
    </div>
}

export default StoreProductList;