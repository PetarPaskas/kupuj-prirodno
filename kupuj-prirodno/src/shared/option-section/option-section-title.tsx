interface OptionSectionTitleProps {
    children: React.ReactNode 
}
const OptionSectionTitle = ({children}:OptionSectionTitleProps)=>{
    return <div className="option_section__title">
        {children}
    </div>
}
export default OptionSectionTitle;