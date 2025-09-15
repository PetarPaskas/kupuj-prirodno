import OptionSection from "../../../shared/option-section/option-section";
import OptionSectionRow from "../../../shared/option-section/option-section-row/option-section-row";
import OptionSectionTitle from "../../../shared/option-section/option-section-title/option-section-title";
import TextInput from "../../../shared/text-input/text-input";

interface BasicAboutFormProps{

}

const BasicAboutForm = ({}:BasicAboutFormProps)=>{
    return <div className="stores_about__basic">
                <OptionSection>
                    <OptionSectionRow>
                        <OptionSectionTitle>Osnovno</OptionSectionTitle>
                    </OptionSectionRow>
                    <OptionSectionRow>
                        <TextInput
                            label="Naziv gazdinstva"
                            placeholder="Naziv gazdinstva"
                            />
                    </OptionSectionRow>
                </OptionSection>
    </div>
}

export default BasicAboutForm;