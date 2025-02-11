import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { FileContext } from "../context/FilesContext";
import { AppFile } from "../types/AppFile";

const NewDocumentButton = () => {
  const { files, setFiles, setSelectedFile } = useContext(FileContext);

  const handleNewDocument = () => {
    const newFile: AppFile = {
      id: uuidv4(),
      createdAt: new Date().toLocaleDateString(),
      name: "untitled-document.md",
      content: "",
    };

    setFiles([...files, newFile]);
    setSelectedFile(newFile);
  };
  return (
    <button
      className="w-[202px] h-[40px]
            text-palette-100 bg-orange hover:bg-orange-hover active:bg-orange  
            flex items-center justify-center rounded-[4px]
            text-pure-white cursor-pointer 
        "
      onClick={handleNewDocument}
    >
      <span className="flex text-[15px] items-center justify-center h-[18px] text-fit">
        + New Document
      </span>
    </button>
  );
};

export default NewDocumentButton;
