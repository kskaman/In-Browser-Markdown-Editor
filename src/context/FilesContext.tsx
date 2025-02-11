// src/context/FilesContext.ts
import { createContext } from "react";
import { AppFile } from "../types/AppFile";

interface FileContextProps {
  files: AppFile[];
  selectedFile: AppFile | null;
  setFiles: React.Dispatch<React.SetStateAction<AppFile[]>>;
  setSelectedFile: React.Dispatch<React.SetStateAction<AppFile | null>>;
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

export const FileContext = createContext<FileContextProps>({
  files: [],
  selectedFile: null,
  setFiles: () => {},
  setSelectedFile: () => {},
  markdown: "",
  setMarkdown: () => {},
});
