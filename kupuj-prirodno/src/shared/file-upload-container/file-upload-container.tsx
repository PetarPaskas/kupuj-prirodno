import { useEffect, useImperativeHandle, useRef, useState, type ReactNode } from "react";

export const supportedMimeTypes = {
    'application/pdf': 'pdf',
    'application/msword': 'doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'application/vnd.ms-excel': 'xls',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
    'text/csv': 'csv',
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
    'image/bmp': 'bmp',
    'image/gif': 'gif',
    'image/svg+xml': 'svg',
    'image/vnd.microsoft.icon': 'ico',
    'image/tiff': 'tiff',
    'image/tif': 'tif',
    'image/webp': 'webp',
}
export type SavedFile = {
    key: number;
    file: File;
}
export type FileType = 'pdf' | 'doc' | 'docx' | 'png' | 'jpeg' | string;

const defaultAllowedUploadTypes: FileType[] = ['png', 'jpeg'];
const defaultFileNumberUploadLimit = 3;
const defaultSingleFileSizeLimitInMB = 2;

export type UploadFailReasons = {
    fileAlreadyAdded: boolean;
    fileTypeNotSupported: boolean;
    exceedingMaxFileCount: boolean;
    exceedingMaxFileSize: boolean;
    missingFiles: boolean;
    attemptToUploadMoreThanOneFile: boolean;
    fileName: string | null;
};

export type FileUploadControls = {
    getUploadedFiles: () => ReadonlyArray <SavedFile> ;
    deleteUploadedFile: (fileKey: number) => void;
    openFileDialog: () => void;
};

export interface FileUploadContainerProps {
    maxSizeInMB ? : number;
    maxFilesAdded ? : number;
    supportedTypes ? : FileType[];
    onFilesSaved: (newFiles: SavedFile[]) => void;
    onUnableToSave: (reasons: UploadFailReasons) => void;
    ref: React.Ref<FileUploadControls>;
    className ? : string | undefined;
    rowClassName ? : string | undefined;
    disabled ? : boolean;
    children?: React.ReactNode;
}

const FileUploadContainer = ({
    ref,
    onFilesSaved,
    onUnableToSave,
    children,
    supportedTypes = defaultAllowedUploadTypes,
    maxFilesAdded = defaultFileNumberUploadLimit,
    maxSizeInMB = defaultSingleFileSizeLimitInMB,
    className = '',
    disabled = false,
}:FileUploadContainerProps)=>{
    const [fileKeyIndex, setFileKeyIndex] = useState<number>(0);
    const [files, setFiles] = useState <SavedFile[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const allowsOnlySingleFile = maxFilesAdded === 1;
    const allowedFileTypes = supportedTypes;
    const allowedFileSizeBytes = maxSizeInMB * 1024 * 1024;

    const resetNativeInput = () => {
        if (inputFileRef.current) inputFileRef.current.value = '';
    };

    const canSaveFiles = (newFiles: FileList): boolean => {
        const reasons: UploadFailReasons = {
            fileTypeNotSupported: false,
            exceedingMaxFileCount: false,
            exceedingMaxFileSize: false,
            missingFiles: false,
            fileAlreadyAdded: false,
            attemptToUploadMoreThanOneFile: false,
            fileName: null,
        };
        if (newFiles.length === 0) {
            onUnableToSave({
                ...reasons,
                missingFiles: true
            });
            return false;
        }
        if (allowsOnlySingleFile && newFiles.length > 1) {
            onUnableToSave({
                ...reasons,
                attemptToUploadMoreThanOneFile: true
            });
            return false;
        }
        const currentFileShouldBeReplacedWhenOnlySingleFileAllowd = allowsOnlySingleFile && files.length === 1 && newFiles.length === 1;
        const addedFilesLimitReached = maxFilesAdded < newFiles.length + files.length;
        if (addedFilesLimitReached && !currentFileShouldBeReplacedWhenOnlySingleFileAllowd) {
            onUnableToSave({
                ...reasons,
                exceedingMaxFileCount: true
            });
            return false;
        }
        const file = newFiles[0];
        const fileType = supportedMimeTypes[file.type as keyof typeof supportedMimeTypes];
        const fileTypeIsSupported = fileType && allowedFileTypes.includes(fileType as FileType);
        const fileSizeIsSupported = file.size <= allowedFileSizeBytes;
        if (!fileTypeIsSupported) {
            onUnableToSave({
                ...reasons,
                fileTypeNotSupported: true,
                fileName: file.name,
            });
            return false;
        }
        if (!fileSizeIsSupported) {
            onUnableToSave({
                ...reasons,
                exceedingMaxFileSize: true,
                fileName: file.name,
            });
            return false;
        }
        if (!currentFileShouldBeReplacedWhenOnlySingleFileAllowd) {
            const isDuplicateName = files.some((x) => x.file.name === file.name);
            if (isDuplicateName) {
                onUnableToSave({
                    ...reasons,
                    fileAlreadyAdded: true,
                    fileName: file.name,
                });
                return false;
            }
        }
        return true;
    };

    const saveFiles = (incoming: FileList) => {
        if (disabled) return;
        let last = fileKeyIndex;
        const shouldReplace = allowsOnlySingleFile && files.length === 1;

        const incomingFiles = Array.from(incoming);
        const filesForSaving: SavedFile[] = incomingFiles.map(icf=>({
            key: ++last,
            file: icf
        }));

         
        setFiles((prev)=>{
            const newState = shouldReplace ? filesForSaving : [...prev, ...filesForSaving];
            onFilesSaved(newState);
            return newState;
        });

        setFileKeyIndex(last);
        resetNativeInput();
    };

    const handleFileSave = (list: FileList) => {
        if (disabled) return;

        if (!canSaveFiles(list)) {
            resetNativeInput();
            return;
        }
        saveFiles(list);
    };

    const handleFileDrop = (event: React.DragEvent <HTMLDivElement> ) => {
        if (disabled) return;
        event.preventDefault();
        setIsDragging(false);
        handleFileSave(event.dataTransfer.files);
    };

    const handleUploadFileChange = (e: React.ChangeEvent <HTMLInputElement> ) => {
        if (disabled) return;
        if (!e.target.files) return;
        handleFileSave(e.target.files);
    };

    const handleDragOver = (event: React.DragEvent <HTMLDivElement> ) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const getUploadedFiles: () => ReadonlyArray<SavedFile> = () => files;
    const deleteUploadedFile = (fileKey: number) => {
        setFiles((prev) => prev.filter((x) => x.key !== fileKey));
        resetNativeInput();
    };
    const openFileDialog = () => {
        if (disabled) return;
        inputFileRef.current?.click();
    };

    useImperativeHandle(ref, () => ({
        getUploadedFiles,
        deleteUploadedFile,
        openFileDialog,
    }));

    const acceptAttributes = allowedFileTypes.map((extension) => `.${extension}`).join(',');
    const fileUploadDescription = [
        {
        name: 'Max items',
        value: maxFilesAdded.toString()
        }, 
        {
        name: 'Size limit',
        value: `${maxSizeInMB}MB`
        }, 
        {
            name: 'Supported types',
            value: supportedTypes.join(', ')
        }
    ];
    return <div 
        className={className}
        onClick={openFileDialog} 
        onDragLeave={handleDragLeave} 
        onDragOver={handleDragOver}
        onDrop={handleFileDrop}
        >
        <input 
            style={{visibility:'hidden', display:'none'}}
            type="file"
            name="upload-file"
            id="upload-file"
            onChange={handleUploadFileChange}
            ref={inputFileRef}
            accept={acceptAttributes}
            multiple={true}
            />
        {children}
    </div>
}

export default FileUploadContainer;
