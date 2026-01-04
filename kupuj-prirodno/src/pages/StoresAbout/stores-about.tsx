import AddressForm from "./sections/address-form";
import AwardsAboutForm from "./sections/awards-about-form";
import BasicAboutForm from "./sections/basic-about-form";
import CertificatesAboutForm from "./sections/certificates-about-form";
import ContactAboutForm from "./sections/contact-about-form";
import DeliverySupportForm from "./sections/delivery-support-form";
import GalleryAboutForm from "./sections/gallery-about-form";
import LogoAboutForm from "./sections/logo-about-form";

interface StoresAboutProps {

}
const StoresAbout = ({}:StoresAboutProps)=>{
    return <div className="content_center">
        Stores About
        <div className="stores_about track">
            <div className="track__left">
                <LogoAboutForm/>
                <AddressForm/>
            </div>
            <div className="track__main">
                <BasicAboutForm/>
                <GalleryAboutForm/>
                <DeliverySupportForm/>
                <ContactAboutForm/>
                <AwardsAboutForm/>
                <CertificatesAboutForm/>
            </div>
        </div>

    </div>
}

export default StoresAbout;