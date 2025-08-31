import type { SpaceBetweenRowProps } from "./space-between-row/space-between-row";

interface SpaceBetweenColumnProps{
    children?:AllowedChildren | AllowedChildren[]
}

type AllowedChildren = React.ReactElement<SpaceBetweenRowProps>;

const SpaceBetweenColumn = ({children}:SpaceBetweenColumnProps)=>{
    return <div className="space_between__column">
        {children}
    </div>
}

export default SpaceBetweenColumn;