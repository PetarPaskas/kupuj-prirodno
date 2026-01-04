interface TextButtonProps{
    className?:string,
    children?:React.ReactNode
    onClick?:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
}

const TextButton = ({children, onClick, className=''}:TextButtonProps)=>{

    const handleClickEvent = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        if(onClick){
            onClick(event);
        }
    }
    const classNameFull = `button text_button ${className}`
    return <button 
        aria-label="button" 
        type="button" 
        className={classNameFull}
        onClick={handleClickEvent}
        >
            {children}
            </button>
}

export default TextButton;