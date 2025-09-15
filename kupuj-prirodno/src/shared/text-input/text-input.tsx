interface TextInputProps{
    label:string,
    placeholder:string
    value?:string,
    name?:string
}

const TextInput = ({label, placeholder, value, name}:TextInputProps)=>{
    return <div className="text_input">
        <label>
            <span className="text_input__label">{label}</span>
            <input 
                type="text" 
                className="text_input__input" 
                placeholder={placeholder} 
                value={value}
                name={name || "input_field"}/>
        </label>
    </div>
}

export default TextInput