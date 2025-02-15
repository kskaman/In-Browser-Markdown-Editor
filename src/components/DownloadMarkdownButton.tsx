import { useContext } from "react";
import { FileContext } from "../context/FilesContext";
import { FaDownload } from "react-icons/fa";

const DownloadMarkdownButton = () => {
  const { selectedFile, markdown } = useContext(FileContext);
  const handleDownloadMD = () => {
    // Convert the markdown text to a Blob
    const blob = new Blob([markdown], { type: "text/markdown" });

    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = selectedFile?.name ?? "document.md"; // The name of the downloaded file
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
  };

  return (
    <button
      className="bg-inherit text-palette-500 px-4 py-2 rounded"
      onClick={handleDownloadMD}
    >
      <FaDownload />
    </button>
  );
};

export default DownloadMarkdownButton;
