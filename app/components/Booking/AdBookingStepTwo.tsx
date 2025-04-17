import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const AdBookingStepTwo: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "audio/*": [],
      "video/*": [],
    },
    multiple: false,
  });

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 font-sans text-gray-800">
      <div>
        <h2 className="text-lg font-bold mb-2">Content</h2>
        <p className="text-sm mb-2">Upload Ad file (audio, image, etc)</p>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors ${
            isDragActive ? "border-gray-500 bg-gray-100" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {file ? (
            <p className="text-gray-700">{file.name}</p>
          ) : (
            <p className="text-gray-400">Drop file here</p>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-2">Ad caption</h2>
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Enter caption, hashtags, etc"
          className="w-full border border-gray-300 rounded-md px-4 text-[16px] py-2 focus:outline-none focus:border-gray-500"
        />
      </div>
    </div>
  );
};

export default AdBookingStepTwo;
