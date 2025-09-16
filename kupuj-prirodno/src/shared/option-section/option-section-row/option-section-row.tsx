interface OptionSectionRowProps {
    className?:string,
    children: React.ReactNode 
}
const OptionSectionRow = ({children, className=''}:OptionSectionRowProps)=>{
    const classFull = `option_section__row ${className}`;
    return <div className={classFull}>
        {children}
    </div>
}
export default OptionSectionRow;