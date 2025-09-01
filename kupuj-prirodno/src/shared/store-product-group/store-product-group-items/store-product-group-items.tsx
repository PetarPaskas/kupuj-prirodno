import React from "react";
import ProductDetailWitQuantity from "../../product-detail-with-quantity/product-detail-with-quantity"

interface StoreProductGroupItemsProps{
    children?:React.ReactNode
}
const StoreProductGroupItems = ({children}:StoreProductGroupItemsProps)=>{

    
    const renderItems = ()=>{
        if(children == null){
            return;
        }

        const childCount = React.Children.count(children);
        if(childCount == 1){
            return <li className="store_product_group__item">
                {children}
            </li>;
        }

        return React.Children.map(children, (child,index) =>{
            return <li key={index} className="store_product_group__item">
                {child}
            </li>;
        });
    }

    return  <ul className="store_product_group__items">
                {renderItems()}
            </ul>
} 

export default StoreProductGroupItems;