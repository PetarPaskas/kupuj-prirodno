interface CheckboxProps {
    title:string,
    name:string,
    ref?:React.Ref<HTMLInputElement>
}
const Checkbox = ({name, title, ref}:CheckboxProps)=>{
    return <div className="checkbox">
            <span className="checkbox__title">{title}</span>
            <div className="checkbox__checkbox_group">
                <input ref={ref} className="checkbox__input" type="checkbox" name={name} id={name} hidden/>
                <label className="checkbox__label" htmlFor={name}></label>
            </div>
        </div>
}

export default Checkbox;