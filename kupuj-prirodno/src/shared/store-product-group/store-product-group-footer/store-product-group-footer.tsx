interface StoreProductGroupFooterProps{
    children?:React.ReactNode
}
const StoreProductGroupFooter = ({children}:StoreProductGroupFooterProps)=>{
    return <div className="store_product_group__footer">
        {children}
    </div>
}

export default StoreProductGroupFooter;