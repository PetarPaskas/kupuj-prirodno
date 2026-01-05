import LocationPicker from "../../../shared/location-picker/location-picker";
import OptionSection from "../../../shared/option-section/option-section";
import OptionSectionRow from "../../../shared/option-section/option-section-row";
import OptionSectionTitle from "../../../shared/option-section/option-section-title";
import TextInput from "../../../shared/text-input/text-input";

const AddressForm = ()=>{
    return <div className="stores_about_address">
        <OptionSection>
            <OptionSectionRow>
                <OptionSectionTitle>Lokacija</OptionSectionTitle>
            </OptionSectionRow>
            <OptionSectionRow>
                <TextInput
                    className="flex-1"
                    label="Adresa"
                    placeholder="Adresa"
                    />
            </OptionSectionRow>
            <OptionSectionRow>
                <TextInput
                    className="flex-1"
                    label="Mesto"
                    placeholder="Mesto"
                    />
            </OptionSectionRow>
            <OptionSectionRow>
                <LocationPicker onLocationChange={(x)=>console.log(x)} className="flex-1" />
            </OptionSectionRow>
        </OptionSection>
    </div>
}

export default AddressForm;