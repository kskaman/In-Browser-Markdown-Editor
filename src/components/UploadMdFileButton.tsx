import { useContext, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { FileContext } from "../context/FilesContext";
import { AppFile } from "../types/AppFile";
import { TbFileUpload } from "react-icons/tb";

const UploadMdFileButton = () => {
  const { files, setFiles, setSelectedFile } = useContext(FileContext);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if the file has a .md extension (case-insensitive)
    if (!file.name.toLowerCase().endsWith(".md")) {
      alert("Please upload a .md file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target?.result;
      if (typeof fileContent === "string") {
        const newFile: AppFile = {
          id: uuidv4(),
          createdAt: new Date().toLocaleDateString(),
          name: file.name,
          content: fileContent,
        };

        setFiles([...files, newFile]);
        setSelectedFile(newFile);
      }
    };
    reader.readAsText(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <button
        className="w-[202px] h-[40px] text-palette-100 bg-orange hover:bg-orange-hover active:bg-orange flex items-center justify-center rounded-[4px] text-pure-white cursor-pointer"
        onClick={handleButtonClick}
      >
        <span className="flex text-[15px] items-center justify-center gap-2 h-[18px] text-fit">
          <TbFileUpload /> <span>Upload Document</span>
        </span>
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".md"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </>
  );
};

export default UploadMdFileButton;
