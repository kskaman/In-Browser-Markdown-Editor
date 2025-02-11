import { useContext, useState } from "react";
import CustomDeleteIcon from "../assets/CustomDeleteIcon";
import { FileContext } from "../context/FilesContext";
import ErrorDiv from "./ErrorDiv";

const DeleteButton = () => {
  const { files, setFiles, setSelectedFile, selectedFile } =
    useContext(FileContext);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = () => {
    if (selectedFile?.name === "welcome.md") {
      setError("'welcome.md' cannot be deleted.");
      return;
    }
    const newFiles = files.filter((file) => file.id !== selectedFile?.id);
    setFiles(newFiles);
    setSelectedFile(files[0]);
  };

  return (
    <div className="relative ml-auto">
      {/* Delete icon */}
      <button className="mr-2" onClick={handleDelete}>
        <CustomDeleteIcon />
      </button>

      {/* In case of Error */}
      {error && <ErrorDiv error={error} setError={setError} />}
    </div>
  );
};

export default DeleteButton;
