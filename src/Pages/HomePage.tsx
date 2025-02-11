import { useContext, useEffect, useState } from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import { FileContext } from "../context/FilesContext";

const HomePage = () => {
  const { selectedFile } = useContext(FileContext);
  const [markdown, setMarkdown] = useState<string>(selectedFile?.content || "");

  useEffect(() => {
    setMarkdown(markdown);
  }, [markdown]);

  useEffect(() => {
    setMarkdown(selectedFile?.content || "");
  }, [selectedFile]);

  return (
    <div>
      <div className="flex flex-row overflow-hidden">
        {/* Editor */}
        <div className="flex-1 border-r border-palette-300 border-r-[2px]">
          <Editor text={markdown} onChange={setMarkdown} />
        </div>
        {/* Preview */}
        <div className="flex-1">
          <Preview markdown={markdown} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
