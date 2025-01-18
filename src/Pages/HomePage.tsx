import React, { useState } from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";

interface HomePageProps {
  data: string; // Type for the `data` prop
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const [markdown, setMarkdown] = useState<string>(data || "");

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
