import { useContext, useState } from "react";
import saveIcon from "../assets/icon-save.svg";
import ErrorDiv from "./ErrorDiv";
import { FileContext } from "../context/FilesContext";

const SaveButton = () => {
  const { selectedFile, setSelectedFile, files, setFiles, markdown } =
    useContext(FileContext);
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    if (!selectedFile) {
      setError("No file selected.");
      return;
    }

    if (selectedFile?.name === "welcome.md") {
      setError("File 'welcome.md' is not permitted for any edit");
      return;
    }
    // Update `selectedFile` as well
    setSelectedFile((prev) => (prev ? { ...prev, content: markdown } : prev));

    // Update file name in the `files` array
    const updatedFiles = files.map((file) =>
      file.id === selectedFile?.id ? { ...file, content: markdown } : file
    );
    setFiles(updatedFiles);
  };

  return (
    <div className="relative">
      <button
        className="w-[152px] h-[40px] bg-orange
          flex items-center justify-center gap-[8px]
          hover:bg-orange-hover active:bg-orange text-palette-100 rounded-[4px]
          cursor-pointer mx-4
          "
        onClick={handleSave}
      >
        <img src={saveIcon} alt="Save Icon" className="w-4 h-4" />
        <span className="-mt-1.5 text-[15px] h-[18px]">Save Changes</span>
      </button>

      {error && <ErrorDiv error={error} setError={setError} />}
    </div>
  );
};

export default SaveButton;
