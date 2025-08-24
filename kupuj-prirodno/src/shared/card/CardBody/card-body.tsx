export interface CardBodyProps {
    children?:React.ReactNode
}

const CardBody = ({children}:CardBodyProps)=>{
    return <div className="card_body">
        {children}
    </div>
}

export default CardBody;