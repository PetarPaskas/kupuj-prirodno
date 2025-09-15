import BasicAboutForm from "./basic-about-form/basic-about-form";
import ContactAboutForm from "./contact-about-form/contact-about-form";

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
                <ContactAboutForm/>
            </div>
        </div>

    </div>
}

export default StoresAbout;