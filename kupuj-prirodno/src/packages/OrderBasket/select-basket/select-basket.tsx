interface SelectBasketProps{
    children: AllowedChildren
}

type AllowedChildren = React.ReactElement<SelectBasketProps> | 
                        React.ReactElement<SelectBasketProps>[];

const SelectBasket = ({children}:SelectBasketProps)=>{
    return <div className="order_basket__select_basket">
        {children}
    </div>
}

export default SelectBasket;