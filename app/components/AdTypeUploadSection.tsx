import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Mic, Image as ImageIcon } from "lucide-react";

const AdTypeUploadRoute = () => {
  const [selectedType, setSelectedType] = useState("mention");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const adTypes = [
    { type: "mention", icon: <Mic className="w-6 h-6" />, count: 5 },
    { type: "banner", icon: <ImageIcon className="w-6 h-6" />, count: 3 },
    {
      type: "both",
      icon: (
        <div className="flex gap-1">
          <Mic className="w-5 h-5" />
          <ImageIcon className="w-5 h-5" />
        </div>
      ),
      count: 10,
    },
  ];

  const onDrop = (acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="p-4">
      {/* Ad Types */}
      <p className="text-sm font-medium mb-2">Select Ad type</p>
      <div className="flex gap-2 mb-4">
        {adTypes.map((ad) => (
          <div
            key={ad.type}
            onClick={() => setSelectedType(ad.type)}
            className={`flex flex-col items-center justify-center w-24 p-4 rounded-md border cursor-pointer relative transition-all duration-200 ${
              selectedType === ad.type
                ? "bg-[#ECE8FD] border-[#805CF7]"
                : "border-gray-200"
            }`}
          >
            {ad.icon}
            <span className="text-xs mt-1 capitalize">{ad.type}</span>
            <span className="absolute -top-2 -right-2 bg-[#805CF7] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {ad.count}
            </span>
          </div>
        ))}
      </div>

      {/* Upload Section */}
      <p className="text-sm font-medium mb-2">Upload Ad file (audio, image, etc)</p>
      <div
        {...getRootProps()}
        className="border border-dashed border-gray-300 rounded-lg h-28 flex items-center justify-center text-gray-400 text-sm cursor-pointer"
      >
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here...</p> : <p>Drop file here</p>}
      </div>
      {uploadedFiles.length > 0 && (
        <ul className="mt-2 text-sm text-gray-600">
          {uploadedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdTypeUploadRoute;
