import Editor from "../components/Editor";
import Preview from "../components/Preview";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-row overflow-hidden">
        {/* Editor */}
        <div className="flex-1 border-r border-palette-300 border-r-[2px]">
          <Editor />
        </div>
        {/* Preview */}
        <div className="flex-1">
          <Preview />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
