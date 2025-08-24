import Card from "../../shared/card/card";
import CardBody from "../../shared/card/CardBody/card-body";
import CardFooter from "../../shared/card/CardFooter/card-footer";
import CardHeader from "../../shared/card/CardHeader/card-header";
import CardHeaderImageCover from "../../shared/card/CardHeaderImageCover/card-header-image-cover";
import type { StoreSummaryItem } from "../../shared/types";

interface StoreCardProps{
    store:StoreSummaryItem
}

const StoreCard = ({store}:StoreCardProps)=>{
    const renderCardHeader = ()=>{
        return <CardHeader>
            <CardHeaderImageCover src="./src/assets/img/fruit.png"/>
        </CardHeader>
    }

    const renderCardBody = ()=>{
        return <CardBody>
        </CardBody>
    }

    const renderCardFooter = ()=>{
        return <CardFooter>
        </CardFooter>
    }
    
    return <Card>
        {renderCardHeader()}
        {renderCardBody()}
        {renderCardFooter()}
    </Card>
}

export default StoreCard;