import { useState } from "react";
import CustomShowPreviewIcon from "../assets/CustomShowPreviewIcon";
import CustomHidePreviewIcon from "../assets/CustomHidePreviewIcon";
import Editor from "../components/Editor";
import Preview from "../components/Preview";

const HomePage = () => {
  const [markdownOpen, setMarkdownOpen] = useState(true);

  return (
    <div className="bg-palette-200 dark:bg-palette-900">
      {/* Header */}
      <div
        className="relative
      flex flex-row overflow-hidden 
      bg-palette-200 dark:bg-palette-900 
      h-[42px] text-palette-500"
      >
        {/* Editor */}

        <div
          className={`${markdownOpen ? "block" : "hidden"}
       flex-1 border-r border-palette-300 border-r-[2px] dark:border-palette-600`}
        >
          <div
            className="h-[42px] 
              pl-4 pt-[8px]"
          >
            <div className="w-[95px] h-[16px] flex flex-row justify-between">
              {Array.from("MARKDOWN").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Preview */}
        <div
          className={`${!markdownOpen ? "block" : "hidden"}
      md:block flex-1`}
        >
          <div className="pt-[8px] pl-[16px]">
            <div className="w-[71px] h-[16px] flex flex-row justify-between">
              {Array.from("PREVIEW").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </div>
          </div>
        </div>
        <button
          className="
            absolute right-4 top-[50%] 
            transform -translate-y-[25%]
            border-none
          "
          onClick={() => setMarkdownOpen((prev) => !prev)}
        >
          {markdownOpen ? <CustomShowPreviewIcon /> : <CustomHidePreviewIcon />}
        </button>
      </div>

      <div className="flex flex-row overflow-hidden">
        {/* Editor */}

        <div
          className={`${markdownOpen ? "block" : "hidden"}
       flex-1 max-w-[100%] lg:max-w-[50%] mx-auto border-r border-palette-300 border-r-[2px] dark:border-palette-600`}
        >
          <Editor />
        </div>

        {/* Preview */}
        <div
          className={`${!markdownOpen ? "block" : "hidden"}
      md:block flex-1 max-w-[100%] lg:max-w-[50%] mx-auto`}
        >
          <Preview />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
