
interface DatePickerProps{
    className?:string,
    label:string,
    name:string
}

const DatePicker = ({label, name, className=''}:DatePickerProps)=>{
    const classFull = `date_picker ${className}`;
    return <div className={classFull}>
            <label htmlFor={name} className="date_picker__label">{label}</label>
            <input className="date_picker__input" type="date" name={name} id={name}/>
        </div>
}

export default DatePicker;
