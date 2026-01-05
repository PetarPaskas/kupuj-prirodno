import { useEffect, useState } from "react";

export interface ImagePreviewProps {
    file:File,
    onClick?:()=>void,
    className?:string,
    alt?:string
}
const ImagePreview = ({file, className="", alt="Preview"}:ImagePreviewProps)=>{
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileExists = !!file;

  useEffect(() => {
    const fileIsImage = fileExists && file.type.startsWith("image/");

    if(fileIsImage){
        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);
    }

  }, [file]);


  if (!fileExists) return null;

  if (!previewUrl) {
    return (
      <div className={className}>
        <span>File is not a supported image</span>
      </div>
    );
  }

  return <div className={className}>
    <img
        style={{
            objectFit:'cover',
            width:'100%',
            height:'100%'
        }}
      src={previewUrl}
      draggable={false}
    />
  </div>;
}

export default ImagePreview



