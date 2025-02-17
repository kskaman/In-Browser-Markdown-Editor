// src/components/DownloadPDFButton.tsx
import { useContext } from "react";
import { FileContext } from "../context/FilesContext";
import { downloadPDF } from "../utils/pdfGenerator";
import { FaDownload } from "react-icons/fa";

/**
 * Helper function to replace a trailing '.md' extension with '.pdf'
 * or append '.pdf' if not present.
 */
const getPdfFilename = (name: string): string => {
  const dotIndex = name.lastIndexOf(".");
  if (dotIndex !== -1 && name.substring(dotIndex).toLowerCase() === ".md") {
    return name.substring(0, dotIndex) + ".pdf";
  }
  return name + ".pdf";
};

const DownloadPDFButton = () => {
  const { markdown, selectedFile } = useContext(FileContext);

  const handleDownload = () => {
    if (!selectedFile) return;
    const filename = getPdfFilename(selectedFile.name);
    downloadPDF(markdown, filename);
  };

  return (
    <button
      className="bg-inherit text-palette-500 px-4 py-2 rounded"
      onClick={handleDownload}
    >
      <FaDownload />
    </button>
  );
};

export default DownloadPDFButton;
