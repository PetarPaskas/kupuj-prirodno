interface StoreProductGroupTitleProps{
    children?:React.ReactNode
}
const StoreProductGroupTitle = ({children}:StoreProductGroupTitleProps)=>{
    return <div className="store_product_group__title">
        {children}
    </div>
}

export default StoreProductGroupTitle;