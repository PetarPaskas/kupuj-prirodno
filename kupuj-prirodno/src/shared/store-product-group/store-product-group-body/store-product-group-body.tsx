interface StoreProductGroupBodyProps{
    children?:React.ReactNode
}
const StoreProductGroupBody = ({children}:StoreProductGroupBodyProps)=>{
    return <div className="store_product_group__body">
        {children}
    </div>
}

export default StoreProductGroupBody;