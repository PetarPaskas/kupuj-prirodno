import AddImageButton from "../../../shared/add-image-button/add-image-button";
import OptionSection from "../../../shared/option-section/option-section";
import OptionSectionRow from "../../../shared/option-section/option-section-row";
import OptionSectionTitle from "../../../shared/option-section/option-section-title";

const LogoAboutForm = ()=>{
    return <div className="stores_about_logo">
        <OptionSection>
            <OptionSectionRow>
                <OptionSectionTitle>Profilna slika</OptionSectionTitle>
            </OptionSectionRow>
            <OptionSectionRow>
                <AddImageButton
                    className="flex-1"/>
            </OptionSectionRow>
        </OptionSection>
    </div>
}

export default LogoAboutForm;