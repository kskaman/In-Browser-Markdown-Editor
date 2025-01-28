import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import axios from "axios";
import Navbar from "./components/Navbar";

import { File } from "./types/File";

const App: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAsideOpen, setAsideOpen] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchFiles = async () => {
      try {
        const response = await axios.get("/data.json", {
          signal: controller.signal,
        });
        setFiles(response.data.files);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();

    return () => {
      controller.abort();
    };
  }, []);

  // Select the second file by default after `files` is updated
  useEffect(() => {
    if (files.length > 1) {
      setSelectedFile(files[1]);
      setLoading(false);
    }
  }, [files]);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  useEffect(() => {
    console.log("selectedFile updated:", selectedFile);
  }, [selectedFile]);

  return (
    <div className="flex flex-row w-screen overflow-y-hidden">
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          {isAsideOpen && (
            <Navbar
              isOpen={isAsideOpen}
              files={files}
              onFileSelect={handleFileSelect}
            />
          )}
          <div
            className={`relative flex flex-col ml-0 transform ${
              isAsideOpen ? "translate-x-[250px]" : "translate-x-0"
            } transition-transform duration-500 ease-in-out`}
          >
            <Header
              isOpen={isAsideOpen}
              fileName={selectedFile?.name || "none"}
              toggleNavbar={setAsideOpen}
            />

            <HomePage data={selectedFile?.content || " No content available"} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
