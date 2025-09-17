import AddImageButton from "../../../shared/add-image-button/add-image-button";
import DatePicker from "../../../shared/date-picker/date-picker";
import OptionSection from "../../../shared/option-section/option-section";
import OptionSectionGroup from "../../../shared/option-section/option-section-group/option-section-group";
import OptionSectionRow from "../../../shared/option-section/option-section-row/option-section-row";
import OptionSectionTitle from "../../../shared/option-section/option-section-title/option-section-title";
import TextInput from "../../../shared/text-input/text-input";

interface CertificatesAboutFormProps{
    
}

const CertificatesAboutForm = ({}:CertificatesAboutFormProps)=>{
    return <div className="stores_about__certificates">
        <OptionSection>
            <OptionSectionRow>
                <OptionSectionTitle>Sertifikati</OptionSectionTitle>
            </OptionSectionRow>
            <OptionSectionGroup>
                <OptionSectionRow>
                    <TextInput label="Naziv sertifikata" placeholder="Naziv sertifikata"/>
                    <TextInput label="Link ka sertifikatu" placeholder="Link ka sertifikatu"/>
                </OptionSectionRow>
                <OptionSectionRow className="flex-start">
                    <DatePicker className="flex-3" label="Datum sertifikovanja" name="datum"/>
                    <DatePicker className="flex-3" label="Datum isteka" name="datum"/>
                    <AddImageButton className="flex-6"/>
                </OptionSectionRow>
            </OptionSectionGroup>
        </OptionSection>
    </div>
}

export default CertificatesAboutForm;
