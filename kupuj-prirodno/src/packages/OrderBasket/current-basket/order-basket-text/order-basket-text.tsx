
interface OrderBasketTextProps{
    children:React.ReactNode,
    className?:string
}

const OrderBasketText = ({children, className}:OrderBasketTextProps)=>{
    const classNameFinal = `order_basket__text ${className}`
    return <span className={classNameFinal}>{children}</span>
     
}

export default OrderBasketText;