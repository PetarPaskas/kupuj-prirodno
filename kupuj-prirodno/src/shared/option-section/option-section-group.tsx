interface OptionSectionGroupProps {
    className?:string,
    children: React.ReactNode 
}
const OptionSectionGroup = ({children, className=''}:OptionSectionGroupProps)=>{
    const classFull = `option_section__group ${className}`;
    return <div className={classFull}>
        {children}
    </div>
}
export default OptionSectionGroup;