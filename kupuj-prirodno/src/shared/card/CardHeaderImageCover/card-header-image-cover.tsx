export interface CardHeaderImageCoverProps{
    src?:string
}

const CardHeaderImageCover = ({src}:CardHeaderImageCoverProps)=>{
    return <img className="card_header__image-cover" src={src}/>
}

export default CardHeaderImageCover;