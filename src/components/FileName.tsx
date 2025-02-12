import { useState, useRef, useContext, useEffect } from "react";
import documentIcon from "../assets/icon-document.svg";
import ErrorDiv from "./ErrorDiv";
import { FileContext } from "../context/FilesContext";

const FileName = () => {
  const { files, selectedFile, setFiles, setSelectedFile, markdown } =
    useContext(FileContext);

  // State for file name, input state, editing state, and errors
  const [fileName, setFileName] = useState<string>(selectedFile?.name || ".md");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentInputValue, setCurrentInputValue] = useState<string>(fileName);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFileName(selectedFile?.name || ".md");
    setCurrentInputValue(selectedFile?.name || ".md");
  }, [selectedFile]);

  const validateFileName = (name: string) => {
    const trimmedName = name.trim();
    console.log(fileName);
    if (trimmedName === "welcome.md") {
      setError("A File cannot be named 'welcome.md'.");
      return false;
    }

    // Enforce `.md` extension
    if (!trimmedName.endsWith(".md")) {
      setError("Filename must end with .md");
      return false;
    }

    // Prevent duplicate filenames (except "untitled-document.md")
    if (
      trimmedName !== "untitled-document.md" &&
      files.some(
        (file) => file.name === trimmedName && file.id !== selectedFile?.id
      )
    ) {
      setError("A file with this name already exists.");
      return false;
    }

    setError(""); // Clear error if all checks pass
    return true;
  };

  /** Handles saving logic */
  const handleSave = () => {
    const trimmedFileName = currentInputValue.trim();

    if (trimmedFileName === "") {
      setFileName(fileName); // Reset to old name
    } else if (validateFileName(trimmedFileName)) {
      setFileName(trimmedFileName);

      // Update `selectedFile` as well
      setSelectedFile((prev) =>
        prev ? { ...prev, name: trimmedFileName, content: markdown } : prev
      );

      // Update file name in the `files` array
      const updatedFiles = files.map((file) =>
        file.id === selectedFile?.id
          ? { ...file, name: trimmedFileName, content: markdown }
          : file
      );
      setFiles(updatedFiles);
    }

    setIsEditing(false); // Exit editing mode
  };

  /** Save on Enter key */
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };

  /** Save when focus is lost */
  const handleBlur = () => {
    handleSave();
  };

  /** Handle click to edit */
  const handleClickFileName = () => {
    // Prevent renaming "welcome.md"
    if (selectedFile?.name === "welcome.md") {
      setError("'welcome.md' cannot be renamed.");
      return false;
    }
    setIsEditing(true);
    setCurrentInputValue(fileName);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  /** Update input state when user types */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(""); // Reset error when typing
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
              className={`text-palette-100 cursor-pointer hover:underline 
                ${selectedFile?.name === "welcome.md" ? "cursor-default" : ""}`} // Disable cursor on "welcome.md"
              onClick={handleClickFileName}
            >
              {fileName}
            </div>
          )}
        </div>
      </div>

      {error && <ErrorDiv error={error} setError={setError} />}
    </div>
  );
};

export default FileName;
