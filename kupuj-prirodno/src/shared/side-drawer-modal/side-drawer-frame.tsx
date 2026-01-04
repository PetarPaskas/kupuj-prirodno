interface SideDrawerFrameProps{
    title:string,
    children?:React.ReactNode
}

const SideDrawerFrame = ({title,children}:SideDrawerFrameProps)=>{

    return <div className="side_drawer_container">
        <h2 className="side_drawer_container__title">{title}</h2>
        <div className="side_drawer_container__body">
            {children}
        </div>
    </div>
}

export default SideDrawerFrame;