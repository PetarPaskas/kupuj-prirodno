import { useRef } from "react";
import FileUploadContainer, { type FileUploadControls, type SavedFile } from "../file-upload-container/file-upload-container";

interface AddImageFormProps {
    onFileSaved?:(files:SavedFile[])=>void;
    className?:string
}

const AddImageButton = ({className, onFileSaved}:AddImageFormProps)=>{
    const files = useRef<FileUploadControls>(null);

    const handleFileSaved = (file:SavedFile[])=>{
        if(onFileSaved){
            onFileSaved(file);
        }
        console.log("Saved file: ", file);
    }
    const onUnableToSave = (obj:any)=>{
        console.log("Unable to save", obj)
    }
    
    return <FileUploadContainer 
        ref={files}
        onFilesSaved={handleFileSaved}
        onUnableToSave={onUnableToSave}
        className={className}
            >
            <div className="add_image_button">
            </div>
        </FileUploadContainer>
}

export default AddImageButton;
