import AddImageButton from "../../../shared/add-image-button/add-image-button";
import OptionSection from "../../../shared/option-section/option-section";
import OptionSectionRow from "../../../shared/option-section/option-section-row/option-section-row";
import OptionSectionTitle from "../../../shared/option-section/option-section-title/option-section-title";

interface GalleryAboutFormProps{
    
}

const GalleryAboutForm = ({}:GalleryAboutFormProps)=>{
    return <div className="stores_about__gallery">
        <OptionSection>
            <OptionSectionRow>
                <OptionSectionTitle>Galerija</OptionSectionTitle>
            </OptionSectionRow>
            <OptionSectionRow className="flex-start">
                <AddImageButton className="flex-6"/>
                <AddImageButton className="flex-6"/>
                <AddImageButton className="flex-6"/>
                <AddImageButton className="flex-6"/>
                <AddImageButton className="flex-6"/>
            </OptionSectionRow>
        </OptionSection>
    </div>
}

export default GalleryAboutForm;
