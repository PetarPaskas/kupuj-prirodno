interface AddImageFormProps {
    className?:string
}

const AddImageButton = ({className}:AddImageFormProps)=>{
    const classFull = `add_image_button ${className}`;
    return <div className={classFull}>
        
    </div>
}

export default AddImageButton;
