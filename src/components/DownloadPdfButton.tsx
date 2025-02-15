import { MutableRefObject, useContext } from "react";
import { FileContext } from "../context/FilesContext";
import { FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const getPdfFilename = (name: string) => {
  const dotIndex = name.lastIndexOf(".");
  // If there's a dot and the extension is 'md' (case insensitive)
  if (dotIndex !== -1 && name.substring(dotIndex).toLowerCase() === ".md") {
    return name.substring(0, dotIndex) + ".pdf";
  }
  // Otherwise, simply append .pdf (or handle it as needed)
  return name + ".pdf";
};

const DownloadPdfButton = ({
  previewRef,
}: {
  previewRef: MutableRefObject<HTMLDivElement | null>;
}) => {
  const { selectedFile } = useContext(FileContext);
  const filename = selectedFile
    ? getPdfFilename(selectedFile.name)
    : "download.pdf";

  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;

    // Convert the preview content into a high-quality PDF
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;

    // Convert markdown content to an HTML div for capturing
    const tempDiv = document.createElement("div");
    tempDiv.style.width = `${pageWidth - margin * 2}px`;
    tempDiv.style.fontSize = "12px";
    tempDiv.style.lineHeight = "24px";
    tempDiv.innerHTML = previewRef.current.innerHTML;
    document.body.appendChild(tempDiv);

    // Capture the formatted HTML as an image
    const canvas = await html2canvas(tempDiv, { scale: 2 });
    document.body.removeChild(tempDiv);

    const imgData = canvas.toDataURL("image/png");
    const imgWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width - 2 * margin;

    let heightLeft = imgHeight;
    let position = margin;

    pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
    heightLeft -= pageHeight - margin;

    // Add new pages if content overflows
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight - margin;
    }

    pdf.save(filename);
  };

  return (
    <button
      className="bg-inherit text-palette-500 px-4 py-2 rounded"
      onClick={handleDownloadPDF}
    >
      <FaDownload />
    </button>
  );
};

export default DownloadPdfButton;
