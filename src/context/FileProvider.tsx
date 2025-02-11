import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { AppFile } from "../types/AppFile";
import { FileContext } from "./FilesContext";

interface Props {
  children: ReactNode;
}

export const FileProvider = ({ children }: Props) => {
  // 1. Initialize empty array and loading = true
  const [files, setFiles] = useState<AppFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<AppFile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // 2. Check localStorage on mount
    const storedFiles = localStorage.getItem("files");
    if (storedFiles) {
      // If localStorage has files, parse and use them immediately
      const parsed = JSON.parse(storedFiles) as AppFile[];
      if (parsed.length > 0) {
        setFiles(parsed);

        // read selectedFile from localStorage
        const storedSelectedFile = localStorage.getItem("selectedFile");
        if (storedSelectedFile) {
          setSelectedFile(JSON.parse(storedSelectedFile));
        } else {
          // Or set a default
          const defaultSelected =
            parsed.find((file) => file.name === "welcome.md") || parsed[0];
          setSelectedFile(defaultSelected);
        }

        // We have files, no fetch needed → turn off loading
        setLoading(false);
        return; // Stop here
      }
    }

    // 3. If localStorage is empty or has an empty array, fetch from data.json
    (async () => {
      try {
        const response = await axios.get("/data.json");
        const remoteFiles: AppFile[] = response.data.files ?? [];

        if (remoteFiles.length > 0) {
          setFiles(remoteFiles);
          localStorage.setItem("files", JSON.stringify(remoteFiles));

          const defaultSelected =
            remoteFiles.find((file) => file.name === "welcome.md") ||
            remoteFiles[0];
          setSelectedFile(defaultSelected);

          // Done fetching, turn off loading
          setLoading(false);
        } else {
          // If no files from the server, we stay loading
          // and print message of no files found on console
          setLoading(true);
          console.error("No files found in server");
        }
      } catch (error) {
        console.error("Error fetching files:", error);
        setLoading(true);
      }
    })();
  }, []);

  // 4. Whenever files change, save them to localStorage
  useEffect(() => {
    if (files.length > 0) {
      localStorage.setItem("files", JSON.stringify(files));
    }
  }, [files]);

  // 5. Whenever selectedFile changes, save to localStorage
  useEffect(() => {
    if (selectedFile) {
      localStorage.setItem("selectedFile", JSON.stringify(selectedFile));
    }
  }, [selectedFile]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        Loading ...
      </div>
    );
  }

  return (
    <FileContext.Provider
      value={{ files, selectedFile, setFiles, setSelectedFile }}
    >
      {children}
    </FileContext.Provider>
  );
};
