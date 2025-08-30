interface StoreProductGroupHeaderProps{
    children?:React.ReactNode
}
const StoreProductGroupHeader = ({children}:StoreProductGroupHeaderProps)=>{
    return <div className="store_product_group__header">
        {children}
    </div>
}

export default StoreProductGroupHeader;