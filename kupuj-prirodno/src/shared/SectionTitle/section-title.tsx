interface SectionTitleProps{
    children:React.ReactNode
}

const SectionTitle = ({children}:SectionTitleProps)=>{
    return <div className="section_title">
        <h2>
            {children}
        </h2>
    </div>
}

export default SectionTitle;