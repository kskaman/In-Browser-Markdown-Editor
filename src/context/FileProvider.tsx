import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { AppFile } from "../types/AppFile";
import { FileContext } from "./FilesContext";

interface Props {
  children: ReactNode;
}

export const FileProvider = ({ children }: Props) => {
  // Initialize empty array & default selectedFile
  const [files, setFiles] = useState<AppFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<AppFile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    // Check localStorage on mount
    const storedFiles = localStorage.getItem("files");
    const storedSelectedFile = localStorage.getItem("selectedFile");

    if (storedFiles) {
      const parsedFiles = JSON.parse(storedFiles) as AppFile[];
      setFiles(parsedFiles);

      // Use stored selectedFile or set default from files
      if (storedSelectedFile) {
        setSelectedFile(JSON.parse(storedSelectedFile));
      } else if (parsedFiles.length > 0) {
        const defaultFile =
          parsedFiles.find((file) => file.name === "welcome.md") ||
          parsedFiles[0];
        setSelectedFile(defaultFile);
      }

      setLoading(false); // No fetch needed
      return;
    }

    // Fetch from `/data.json` if localStorage is empty
    (async () => {
      try {
        const response = await axios.get("/data.json");
        const remoteFiles: AppFile[] = response.data.files ?? [];

        if (remoteFiles.length > 0) {
          setFiles(remoteFiles);
          localStorage.setItem("files", JSON.stringify(remoteFiles));

          const defaultFile =
            remoteFiles.find((file) => file.name === "welcome.md") ||
            remoteFiles[0];
          setSelectedFile(defaultFile);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching files:", error);
        setLoading(false);
      }
    })();
  }, []);

  // Save `files` to localStorage when it changes
  useEffect(() => {
    if (files.length > 0) {
      localStorage.setItem("files", JSON.stringify(files));
    }
  }, [files]);

  // Save `selectedFile` to localStorage when it changes
  useEffect(() => {
    if (selectedFile) {
      localStorage.setItem("selectedFile", JSON.stringify(selectedFile));
      setMarkdown(selectedFile.content);
    }
  }, [selectedFile]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        Loading...
      </div>
    );
  }

  return (
    <FileContext.Provider
      value={{
        files,
        selectedFile,
        setFiles,
        setSelectedFile,
        markdown,
        setMarkdown,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};
