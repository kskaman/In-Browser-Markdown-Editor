import fileIcon from "../assets/icon-document.svg";

interface FileDivProps {
  file: {
    id: number;
    createdAt: string;
    name: string;
    content: string;
  };
  onClick: () => void;
}

const FileDiv = ({ file, onClick }: FileDivProps) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-[50px] flex items-center gap-4 cursor-pointer hover:bg-palette-800 transition-colors px-[8px] rounded-[6px]"
    >
      {/* File Icon */}
      <img src={fileIcon} alt="File Icon" className="w-[13.71px] h-[16px]" />

      {/* Date and File Name */}
      <div className="flex flex-col gap-[3px]">
        <span className="text-[13px] text-palette-500 font-sans">
          {file.createdAt}
        </span>
        <span className="text-[15px] text-palette-100 font-sans truncate">
          {file.name}
        </span>
      </div>
    </div>
  );
};

export default FileDiv;
