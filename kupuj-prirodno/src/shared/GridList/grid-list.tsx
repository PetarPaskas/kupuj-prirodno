import type { ReactElement } from "react"
import type { GridListItemProps } from "./GridListItem/grid-list-item";

interface GridListProps{
    children:AllowedChildren | AllowedChildren[]
}

type AllowedChildren = ReactElement<GridListItemProps>;

const GridListContainer = ({children}:GridListProps)=>{
    return <div className="grid_list">
        {children}
    </div>
}

export default GridListContainer;
