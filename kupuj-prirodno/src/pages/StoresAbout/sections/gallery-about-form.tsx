import { useState } from "react";
import AddImageButton from "../../../shared/add-image-button/add-image-button";
import OptionSection from "../../../shared/option-section/option-section";
import OptionSectionRow from "../../../shared/option-section/option-section-row";
import OptionSectionTitle from "../../../shared/option-section/option-section-title";
import { type SavedFile } from "../../../shared/file-upload-container/file-upload-container";
import ImagePreview from "../../../shared/image-preview/image-preview";

interface GalleryAboutFormProps{
    
}

const GalleryAboutForm = ({}:GalleryAboutFormProps)=>{
    const [images, setImages] = useState<SavedFile[]>([]);

    const handleAddImage = (files:SavedFile[])=>{
        setImages(files);
    }

    return <div className="stores_about__gallery">
        <OptionSection>
            <OptionSectionRow>
                <OptionSectionTitle>Galerija</OptionSectionTitle>
            </OptionSectionRow>
            <OptionSectionRow className="flex-start">
                {images.map(img=><ImagePreview file={img.file} className="flex-5"/>)}
                <AddImageButton className="flex-6" onFileSaved={handleAddImage}/>
            </OptionSectionRow>
        </OptionSection>
    </div>
}

export default GalleryAboutForm;
