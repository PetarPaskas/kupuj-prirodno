interface OptionSectionRowProps {
    children: React.ReactNode 
}
const OptionSectionRow = ({children}:OptionSectionRowProps)=>{
    return <div className="option_section__row">
        {children}
    </div>
}
export default OptionSectionRow;