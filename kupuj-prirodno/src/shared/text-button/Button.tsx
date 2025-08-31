interface TextButtonProps{
    children?:React.ReactNode
}

const TextButton = ({children}:TextButtonProps)=>{
    return <button type="button" className="button text_button">{children}</button>
}

export default TextButton;