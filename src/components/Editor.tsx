import { useContext } from "react";
import { FileContext } from "../context/FilesContext";

const Editor = () => {
  const { markdown, setMarkdown } = useContext(FileContext);

  return (
    <div className="flex flex-col h-full">
      {/* Editor Space */}
      <textarea
        className="flex-grow font-mono h-[calc(100vh-114px)] 
            overflow-auto px-4 pt-[9px] pb-4 text-[14px] 
            leading-[24px] text-palette-700 dark:text-palette-400
            bg-palette-100 dark:bg-palette-1000 resize-none outline-none"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter your Markdown here..."
      />
    </div>
  );
};

export default Editor;
