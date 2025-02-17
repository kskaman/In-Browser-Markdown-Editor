// src/utils/pdfGenerator.ts
import showdown from "showdown";
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// Set up pdfMake's virtual file system
pdfMake.vfs = pdfFonts.vfs;

/**
 * Converts markdown content into a pdfmake document definition with custom styles
 * and triggers a download.
 *
 * @param markdown - The markdown text to convert.
 * @param filename - The desired name of the downloaded PDF.
 */
export function downloadPDF(markdown: string, filename: string): void {
  // Convert markdown to HTML using showdown.
  const converter = new showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });
  const html = converter.makeHtml(markdown);

  // Convert the HTML into a pdfmake document definition,
  // providing custom default styles to match your ReactMarkdown styling.
  const docDefinition = {
    content: htmlToPdfmake(html, {
      defaultStyles: {
        default: { font: "roboto" },
        h1: { fontSize: 32, bold: true, color: "#35393f", margin: [0, 10, 0, 10] },
        h2: { fontSize: 28, bold: true, color: "#35393f", margin: [0, 8, 0, 8] },
        h3: { fontSize: 24, bold: true, color: "#35393f", margin: [0, 6, 0, 6] },
        h4: { fontSize: 20, bold: true, color: "#35393f", margin: [0, 4, 0, 4] },
        h5: { fontSize: 16, bold: true, color: "#35393f", margin: [0, 4, 0, 4] },
        h6: { fontSize: 14, bold: true, color: "#e46643", margin: [0, 4, 0, 4] },
        p: { fontSize: 14, margin: [0, 4, 0, 4] },
        blockquote: { 
          fontSize: 14,
          bold: true,
          color: "#35393f",
          margin: [5, 10, 0, 10],
        },
        a: { decoration: "underline", color: "#35393f",},
        code: { fontSize: 14, color: "#35393f", fillColor: "#f5f5f5", margin: [2, 2, 2, 2] },
        pre: { fontSize: 14, fillColor: "#f5f5f5", margin: [4, 4, 4, 4], rounded: 4 },
        hr: { margin: [0, 10, 0, 10], color: "#e4e4e4" },
        table: { margin: [0, 5, 0, 5] },
        thead: { margin: [0, 4, 0, 4], fillColor: "#f5f5f5" },
        tbody: { margin: [0, 4, 0, 4] },
        tr: { margin: [0, 2, 0, 2] },
        th: { fontSize: 14, bold: true, margin: [2, 2, 2, 2], fillColor: "#e4e4e4", color: "#35393f" },
        td: { fontSize: 14, margin: [2, 2, 2, 2], color: "#7c8187" },
        ul: { margin: [0, 4, 0, 4] },
        ol: { margin: [0, 4, 0, 4] }
      },
    }),
    // pdfMake automatically handles page breaks.
  };

  // Generate and download the PDF.
  pdfMake.createPdf(docDefinition).download(filename);
}
