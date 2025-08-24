import type { ReactElement } from "react";
import type { CardHeaderImageCoverProps } from "../CardHeaderImageCover/card-header-image-cover";

export interface CardHeaderProps {
    children?:AllowedChildren | AllowedChildren[]
}

type AllowedChildren = ReactElement<CardHeaderImageCoverProps>

const CardHeader = ({children}:CardHeaderProps)=>{
    return <div className="card_header">
        {children}
    </div>
}

export default CardHeader;