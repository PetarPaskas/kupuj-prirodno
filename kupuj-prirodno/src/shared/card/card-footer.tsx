export interface CardFooterProps {
    children?:React.ReactNode
}

const CardFooter = ({children}:CardFooterProps)=>{
    return <div className="card_footer">
        {children}
    </div>
}

export default CardFooter;