import TextButton from "../../../../shared/text-button/Button";

export interface SelectBasketOptionProps{
    children?:React.ReactNode,
    active:boolean,
    onClick:()=>void
}


const SelectBasketOption = ({children, onClick, active}:SelectBasketOptionProps)=>{
    const buttonClassName = `order_basket__select_basket_button ${active && "order_basket__select_basket_button--active"}`
    return <div className="order_basket__select_basket_option">
        <TextButton onClick={onClick} className={buttonClassName}>
            {children}
        </TextButton>
    </div>
}

export default SelectBasketOption;