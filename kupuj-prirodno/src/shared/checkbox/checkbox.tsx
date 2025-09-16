interface CheckboxProps {
    name:string,
    ref:React.Ref<HTMLInputElement>
}
const Checkbox = ({name, ref}:CheckboxProps)=>{
    return <div className="checkbox">
            <input ref={ref} className="checkbox__input" type="checkbox" name={name} id={name} hidden/>
            <label className="checkbox__label" htmlFor={name}></label>
        </div>
}

export default Checkbox;