import FileDiv from "./FileDiv";
import NewDocumentButton from "./NewDocumentButton";

import { File } from "../types/File";

interface NavbarProps {
  isOpen: boolean;
  files: File[];
  onFileSelect: (file: File) => void;
}

const Navbar = ({ isOpen, files, onFileSelect }: NavbarProps) => {
  return (
    <aside
      className={`fixed top-0 left-0 
          h-full flex flex-col gap-7
          bg-palette-900 w-[250px]
          py-[18px] pl-[24px] pr-[12px]
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-500 ease-in-out}`}
    >
      <h1
        className="font-roboto text-[13.95px] tracking-[2px]
          text-palette-500 w-[131px]"
      >
        MY DOCUMENTS
      </h1>
      <NewDocumentButton />
      {files.map((file) => (
        <FileDiv key={file.id} file={file} onClick={() => onFileSelect(file)} />
      ))}
    </aside>
  );
};

export default Navbar;
