import React, { useState, useRef } from "react";
import documentIcon from "../assets/icon-document.svg";

interface FileNameProps {
  fileOpen: string;
}

const FileName = ({ fileOpen }: FileNameProps) => {
  const [fileName, setFileName] = useState(fileOpen);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [currentInputValue, setCurrentInputValue] = useState(fileName);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFileName = (name: string) => {
    if (!name.endsWith(".md")) {
      setError("Filename must end with .md");
      return false;
    }

    setError("");
    return true;
  };

  const handleSave = () => {
    const trimmedFileName = currentInputValue.trim();
    if (trimmedFileName === "") {
      setFileName(fileName);
      setIsEditing(false);
    } else if (validateFileName(trimmedFileName)) {
      setFileName(trimmedFileName);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };

  const handleBlur = () => {
    handleSave();
  };

  const handleClickFileName = () => {
    setIsEditing(true);
    setCurrentInputValue(fileName);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setCurrentInputValue(event.target.value);
  };

  return (
    <div className="w-[350px] h-[72px] bg-palette-800 flex items-center relative">
      <div className="h-[38px] mx-[24px] flex flex-row items-center gap-4">
        <img src={documentIcon} alt="Document Icon" />

        <div className="flex flex-col gap-[3px]">
          <div className="text-palette-500 font-sans font-light text-[13px]">
            Document Name
          </div>
          {isEditing ? (
            <input
              ref={inputRef}
              value={currentInputValue}
              onChange={handleChange}
              className="bg-transparent w-[272px] text-[15px] font-sans
                border-b-2 border-palette-500 text-palette-100 
                outline-none focus:border-palette-100 caret-orange"
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
            />
          ) : (
            <div
              className="text-palette-100 cursor-pointer hover:underline"
              onClick={handleClickFileName}
            >
              {fileName}
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="absolute top-[80px] left-[24px] bg-orange-hover text-palette-100 text-sm px-3 py-2 rounded shadow-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default FileName;
