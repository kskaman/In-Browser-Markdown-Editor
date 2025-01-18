import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import axios from "axios";

interface File {
  id: number;
  createdAt: string;
  name: string;
  content: string;
}

const App: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const baseUrl = "http://localhost:3001/files";

    const fetchFiles = async () => {
      const response = await axios.get(baseUrl);
      setFiles(response.data);
      setLoading(false);
    };

    fetchFiles();
  }, []);

  const fileContent = files[1]?.content;
  return (
    <>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : files[1] ? (
        <HomePage data={fileContent} />
      ) : (
        <p>No file data available</p>
      )}
    </>
  );
};

export default App;
