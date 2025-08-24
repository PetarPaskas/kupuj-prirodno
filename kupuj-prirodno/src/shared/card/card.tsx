import type { ReactElement } from "react";
import { type CardBodyProps } from "./CardBody/card-body";
import { type CardFooterProps } from "./CardFooter/card-footer";
import { type CardHeaderProps } from "./CardHeader/card-header";

interface CardProps{
    children: AllowedChildren | AllowedChildren[]
}

type AllowedChildren = ReactElement<CardHeaderProps> |
                         ReactElement<CardBodyProps> | 
                         ReactElement<CardFooterProps> ;
                         

const Card = ({children}:CardProps)=>{
    return <div className="card">
        {children}
    </div>
}

export default Card;