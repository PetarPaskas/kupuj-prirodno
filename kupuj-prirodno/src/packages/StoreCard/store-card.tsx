import Card from "../../shared/card/card";
import CardBody from "../../shared/card/CardBody/card-body";
import CardFooter from "../../shared/card/CardFooter/card-footer";
import CardHeader from "../../shared/card/CardHeader/card-header";
import CardHeaderImageCover from "../../shared/card/CardHeaderImageCover/card-header-image-cover";
import type { StoreSummaryItem } from "../../shared/types";
import StoreDescription from "./StoreDescription/store-description";

interface StoreCardProps{
    store:StoreSummaryItem
}

const StoreCard = ({store}:StoreCardProps)=>{
    
    return <Card>
        <CardHeader>
            <CardHeaderImageCover src={store.coverImage}/>
        </CardHeader>
        <CardBody>
            <StoreDescription store={store}/>
        </CardBody>
    </Card>
}

export default StoreCard;