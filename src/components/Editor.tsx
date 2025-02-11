import { useContext } from "react";
import { FileContext } from "../context/FilesContext";

const Editor = () => {
  const { markdown, setMarkdown } = useContext(FileContext);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div
        className="h-[42px] 
            bg-palette-200 dark:bg-palette-900 text-palette-500 pl-4 pt-[8px]"
      >
        <div className="w-[95px] h-[16px] flex flex-row justify-between">
          {Array.from("MARKDOWN").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      </div>
      {/* Editor Space */}
      <textarea
        className="flex-grow font-mono h-[calc(100vh-114px)] 
            overflow-auto px-4 pt-[9px] pb-4 text-[14px] 
            leading-[24px] text-palette-700 dark:text-palette-400
            bg-palette-100 dark:bg-palette-900 resize-none outline-none"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter your Markdown here..."
      />
    </div>
  );
};

export default Editor;
