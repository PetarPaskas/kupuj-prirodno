import { useRef } from "react";
import FileUploadContainer, { type FileUploadControls, type SavedFile } from "../file-upload-container/file-upload-container";

interface AddImageFormProps {
    className?:string
}

const AddImageButton = ({className}:AddImageFormProps)=>{
    const files = useRef<FileUploadControls>(null);

    const onFilesSaved = (file:SavedFile[])=>{
        console.log("Saved file: ", file);
    }
    const onUnableToSave = (obj:any)=>{
        console.log("Unable to save", obj)
    }
    
    return <FileUploadContainer 
        ref={files}
        onFilesSaved={onFilesSaved}
        onUnableToSave={onUnableToSave}
        className={className}
            >
            <div className="add_image_button">
            </div>
        </FileUploadContainer>
}

export default AddImageButton;
