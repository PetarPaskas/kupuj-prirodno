import { useState } from "react";
import OptionSection from "../../../shared/option-section/option-section";
import OptionSectionRow from "../../../shared/option-section/option-section-row/option-section-row";
import OptionSectionTitle from "../../../shared/option-section/option-section-title/option-section-title";
import OptionSectionGroup from "../../../shared/option-section/option-section-group/option-section-group";
import TextInput from "../../../shared/text-input/text-input";
import DatePicker from "../../../shared/date-picker/date-picker";
import AddImageButton from "../../../shared/add-image-button/add-image-button";
import TextButton from "../../../shared/text-button/Button";

interface AwardsAboutFormProps{
    
}

const AwardsAboutForm = ({}:AwardsAboutFormProps)=>{    
    const [awards, setAwards] = useState<number[]>([1]);

    const handleAddAward = ()=>{
        setAwards((prevState)=>[1,...prevState]);
    }    
    const renderAwards = ()=>awards.map((award, index)=>{
        return <OptionSectionGroup key={index}>
                <OptionSectionRow>
                    <TextInput label="Naziv nagrade" placeholder="Naziv nagrade"/>
                    <TextInput label="Link ka nagradi" placeholder="Link ka nagradi"/>
                </OptionSectionRow>
                <OptionSectionRow className="flex-start">
                    <DatePicker className="flex-3" label="Datum osvajanja" name="datum"/>
                    <AddImageButton className="flex-6"/>
                </OptionSectionRow>
            </OptionSectionGroup>
    });
    
    
    return <div className="stores_about__awards">
        <OptionSection>
            <OptionSectionRow>
                <OptionSectionTitle>Nagrade</OptionSectionTitle>
            </OptionSectionRow>
            {renderAwards()}
            <OptionSectionRow className="flex-3">
                <TextButton onClick={handleAddAward}>Dodaj</TextButton>
            </OptionSectionRow>
        </OptionSection>
    </div>
}

export default AwardsAboutForm;
