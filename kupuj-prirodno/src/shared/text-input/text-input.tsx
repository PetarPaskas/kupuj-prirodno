interface TextInputProps{
    label:string,
    placeholder:string
    value?:string,
    name?:string,
    ref?:React.Ref<HTMLInputElement>
}

const TextInput = ({label, placeholder, value, name, ref}:TextInputProps)=>{
    return <div className="text_input">
        <label>
            <span className="text_input__label">{label}</span>
            <input ref={ref}
                type="text" 
                className="text_input__input" 
                placeholder={placeholder} 
                value={value}
                name={name || "input_field"}/>
        </label>
    </div>
}

export default TextInput