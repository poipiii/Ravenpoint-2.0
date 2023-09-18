import React, { useState,useCallback } from "react";
import { Plus, X } from "lucide-react";
import {useDropzone} from 'react-dropzone'
import { Separator } from "./ui/separator";
import { nanoid } from 'nanoid'
import { ScrollArea } from "./ui/scroll-area";

interface UploadedFile {
  content: File;
  name: string;
  file_id: string;
}
const Upload: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
    const onDrop = useCallback((acceptedFiles:File[]) => {
        setFiles([...files, ...acceptedFiles.map(file => ({content:file, name: file.name,file_id: nanoid()}))])
        
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})




  const handleFileDelete = (file_id: string) => {
    const newFiles = files.filter((file) => file.file_id !== file_id);
    setFiles(newFiles);
  };

  const handleFileRename = (index: number, name: string) => {
    const newFiles = [...files];
    newFiles[index].name = name;
    setFiles(newFiles);
  };

  return (
    <div className="flex flex-col my-8">
        <div className=" text-center border-2 border-dashed border-gray-400 rounded-md p-4">
          <div>
        <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p className="text-gray-400">Drag 'n' drop some files here, or click to select files</p>
        <Plus className="mx-auto mt-2 text-gray-400"/>
      </div>
    </div>
        </div>
        <div className="mt-4">
            <p className="font-semibold">Uploaded Files</p>
            <Separator className="my-4"></Separator>
            <div className="">
                {files.length === 0 ? 
                <div className="text-gray-400 text-center">
                    No files uploaded yet
                </div>
                :
                <ScrollArea className="h-[400px]">
                      <div className="flex flex-col space-y-2">
                {files.map((file, index) => (
                    <div className="flex flex-row justify-between" key={file.file_id}>
                        <p>{file.name}</p>
                        <X onClick={()=>handleFileDelete(file.file_id)} className="text-zinc-400 hover:cursor-pointer hover:text-red-600 mr-10"></X>


                    </div>
                ))}
                </div>

                </ScrollArea>
              
                
              
}


            </div>
            
        </div>

    </div>
  );
};

export default Upload;