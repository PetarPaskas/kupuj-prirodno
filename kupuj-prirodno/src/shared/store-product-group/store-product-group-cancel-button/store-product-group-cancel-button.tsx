interface StoreProductGroupCancelButtonProps{
    children?:React.ReactNode
}

const StoreProductGroupCancelButton = ({children}:StoreProductGroupCancelButtonProps)=>{
    return <button className="store_product_group__cancel_button">{children}</button>
     
}
 
export default StoreProductGroupCancelButton;