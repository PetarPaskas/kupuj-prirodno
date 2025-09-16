import Checkbox from "../../../shared/checkbox/checkbox";
import GridListContainer from "../../../shared/GridList/grid-list";
import GridListItem from "../../../shared/GridList/GridListItem/grid-list-item";
import OptionSection from "../../../shared/option-section/option-section";
import OptionSectionRow from "../../../shared/option-section/option-section-row/option-section-row";
import OptionSectionTitle from "../../../shared/option-section/option-section-title/option-section-title";
import TextInput from "../../../shared/text-input/text-input";

interface DeliverySupportFormProps{
    
}

const DeliverySupportForm = ({}:DeliverySupportFormProps)=>{
    return <div className="stores_about__delivery_support">
        <OptionSection>
            <OptionSectionRow>
                <OptionSectionTitle>Opcije preuzimanja</OptionSectionTitle>
            </OptionSectionRow>
            <OptionSectionRow>
                <Checkbox title="Preuzimanje dostavom" name="delivery-courier"/>
                <TextInput  label="Cena dostave" placeholder="Cena dostave"/>
            </OptionSectionRow>
            <OptionSectionRow>
                <Checkbox title="Licno preuzimanje" name="delivery-inperson"/>
                <div className="empty"></div>
            </OptionSectionRow>
        </OptionSection>
    </div>
}

export default DeliverySupportForm;
