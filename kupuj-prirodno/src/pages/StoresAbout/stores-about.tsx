import BasicAboutForm from "./basic-about-form/basic-about-form";

interface StoresAboutProps {

}
const StoresAbout = ({}:StoresAboutProps)=>{
    return <div className="content_center">
        Stores About
        <div className="stores_about track">
            <div className="track__left">
        
            </div>
            <div className="track__main">
                <BasicAboutForm/>
            </div>
        </div>

    </div>
}

export default StoresAbout;