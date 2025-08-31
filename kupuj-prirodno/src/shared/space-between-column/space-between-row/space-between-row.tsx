export interface SpaceBetweenRowProps {
    children?:React.ReactNode
}   

const SpaceBetweenRow = ({children}:SpaceBetweenRowProps)=>{
    return <div className="space_between__row">
        {children}
    </div>
}

export default SpaceBetweenRow;