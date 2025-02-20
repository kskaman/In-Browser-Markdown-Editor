import { useContext } from "react";
import { FileContext } from "../context/FilesContext";
import FileDiv from "./FileDiv";
import NewDocumentButton from "./NewDocumentButton";
import { AppFile } from "../types/AppFile";
import ThemeButton from "./ThemeButton";
import UploadMdFileButton from "./UploadMdFileButton";

interface NavbarProps {
  isOpen: boolean;
}

const Navbar = ({ isOpen }: NavbarProps) => {
  const { files, setSelectedFile } = useContext(FileContext);

  return (
    <aside
      className={`fixed top-0 left-0 
          h-full flex flex-col gap-7
          bg-palette-900 w-[250px]
          py-[18px] pl-[24px] pr-[12px]
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-500 ease}`}
    >
      <h1
        className="font-roboto text-[13.95px] tracking-[2px]
          text-palette-500 w-[131px]"
      >
        MY DOCUMENTS
      </h1>
      <div className="flex flex-col gap-2">
        <UploadMdFileButton />
        <NewDocumentButton />
      </div>
      {files.map((file: AppFile) => (
        <FileDiv
          key={file.id}
          file={file}
          onClick={() => setSelectedFile(file)}
        />
      ))}
      <div className="mt-auto">
        <ThemeButton />
      </div>
    </aside>
  );
};

export default Navbar;
