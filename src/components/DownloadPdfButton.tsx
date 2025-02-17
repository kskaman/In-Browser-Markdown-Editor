import { MutableRefObject } from "react";
import { FaDownload } from "react-icons/fa";

const DownloadPdfButton = ({
  previewRef,
}: {
  previewRef: MutableRefObject<HTMLDivElement | null>;
}) => {
  const handlePrint = () => {
    if (!previewRef.current) return;

    // Get the HTML content from the preview container.
    const printContents = previewRef.current.innerHTML;

    const width = Math.ceil(window.innerWidth * 0.9);
    const height = Math.ceil(window.innerHeight * 0.9);

    // Open a new window for printing.
    const printWindow = window.open("", "", `height=${height},width=${width}`);
    if (!printWindow) return;

    // Write a complete HTML document to the new window.
    printWindow.document.write(`
          <html>
            <head>
              <style>
                /* Add your custom print styles here. These should match your ReactMarkdown styles. */
                body {
                  font-family: 'Roboto', sans-serif;
                  margin: 0;
                  padding: 20px;
                }
                h1 {
                  font-size: 32px;
                  color: #35393f;
                  font-weight: bold;
                  margin: 10px 0;
                }
                h2 {
                  font-size: 28px;
                  color: #35393f;
                  font-weight: bold;
                  margin: 8px 0;
                }
                h3 {
                  font-size: 24px;
                  color: #35393f;
                  font-weight: bold;
                  margin: 6px 0;
                }
                h4 {
                  font-size: 20px;
                  color: #35393f;
                  font-weight: bold;
                  margin: 4px 0;
                }
                h5 {
                  font-size: 16px;
                  color: #35393f;
                  font-weight: bold;
                  margin: 4px 0;
                }
                h6 {
                  font-size: 14px;
                  color: #e46643;
                  font-weight: bold;
                  margin: 4px 0;
                }
                p {
                  font-size: 14px;
                  margin: 4px 0;
                }
                blockquote {
                  background-color: #f5f5f5;
                  padding: 28px 22px;
                  font-weight: bold;
                  color: #35393f;
                  border-left: 4px solid #e46643;
                  margin: 10px 0;
                }
                a {
                  text-decoration: underline;
                  color: #35393f;
                }
                code {
                  font-size: 14px;
                  background-color: #f5f5f5;
                  padding: 2px;
                  display: inline-block;
                }
                pre {
                  font-size: 14px;
                  background-color: #f5f5f5;
                  padding: 8px;
                  border-radius: 4px;
                  white-space: pre-wrap;
                }
                ul, ol {
                  margin: 4px 0;
                  padding-left: 30px;
                  /* Note: List markers (dots/numbers) are controlled by the browser's print style */
                }
                hr {
                  margin: 10px 0;
                  border: 1px solid #e4e4e4;
                }
                table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 10px 0;
                }
                th, td {
                  border: 1px solid #e4e4e4;
                  padding: 4px;
                }
              </style>
            </head>
            <body>
              ${printContents}
            </body>
          </html>
        `);

    printWindow.document.close();
    printWindow.focus();
    // Delay printing slightly to ensure the content is rendered.
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  return (
    <button
      className="bg-inherit text-palette-500 px-4 py-2 rounded"
      onClick={handlePrint}
    >
      <FaDownload />
    </button>
  );
};

export default DownloadPdfButton;
