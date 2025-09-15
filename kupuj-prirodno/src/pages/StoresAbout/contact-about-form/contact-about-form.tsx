import OptionSection from "../../../shared/option-section/option-section";
import OptionSectionRow from "../../../shared/option-section/option-section-row/option-section-row";
import OptionSectionTitle from "../../../shared/option-section/option-section-title/option-section-title";
import TextInput from "../../../shared/text-input/text-input";

interface ContactAboutFormProps{
    
}

const ContactAboutForm = ({}:ContactAboutFormProps)=>{
    return <div className="stores_about__contact">
        <OptionSection>
            <OptionSectionRow>
                <OptionSectionTitle>Kontakt</OptionSectionTitle>
            </OptionSectionRow>
            <OptionSectionRow>
                <TextInput  label="Mobilni telefon"
                            placeholder="Mobilni telefon"/>
                <TextInput  label="Viber"
                            placeholder="Viber"/>
            </OptionSectionRow>
            <OptionSectionRow>
                <TextInput  label="E-mail"
                            placeholder="E-mail"/>
                <TextInput  label="Whatsapp"
                            placeholder="Whatsapp"/>
            </OptionSectionRow>
            <OptionSectionRow>
                <TextInput  label="Website"
                            placeholder="Website"/>
                <TextInput  label="Instagram"
                            placeholder="Instagram"/>
            </OptionSectionRow>          
        </OptionSection>
    </div>
}

export default ContactAboutForm;
