import BasicAboutForm from "./basic-about-form/basic-about-form";
import CertificatesAboutForm from "./certificates-about-form/certificates-about-form";
import ContactAboutForm from "./contact-about-form/contact-about-form";
import DeliverySupportForm from "./delivery-support-form/delivery-support-form";
import GalleryAboutForm from "./gallery-about-form/gallery-about-form";

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
                <GalleryAboutForm/>
                <DeliverySupportForm/>
                <ContactAboutForm/>
                <CertificatesAboutForm/>
            </div>
        </div>

    </div>
}

export default StoresAbout;