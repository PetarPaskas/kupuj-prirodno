
export interface GridListItemProps{
    children?:React.ReactNode
}


const GridListItem = ({children}:GridListItemProps)=>{
    return <div className="grid_list__item">
        {children}
    </div>
}

export default GridListItem;
