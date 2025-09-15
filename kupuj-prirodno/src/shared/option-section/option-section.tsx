interface OptionSectionProps {
    children: React.ReactNode 
}
const OptionSection = ({children}:OptionSectionProps)=>{
    return <div className="option_section">
        {children}
    </div>
}
export default OptionSection;