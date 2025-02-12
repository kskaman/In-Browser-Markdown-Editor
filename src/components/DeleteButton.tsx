import { useContext, useState } from "react";
import CustomDeleteIcon from "../assets/CustomDeleteIcon";
import { FileContext } from "../context/FilesContext";
import ErrorDiv from "./ErrorDiv";

import closeModalIcon from "../assets/icon-close-modal.svg";

const DeleteButton = () => {
  const { files, setFiles, setSelectedFile, selectedFile } =
    useContext(FileContext);
  const [error, setError] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const handleOpenDeleteModal = () => {
    // Check if the file is 'welcome.md' first
    if (selectedFile?.name === "welcome.md") {
      setError("'welcome.md' cannot be deleted.");
      return;
    }
    // Otherwise, open modal
    setShowDeleteModal(true);
  };

  //  delete the file after user confirms
  const handleConfirmDelete = () => {
    if (!selectedFile) return;

    const newFiles = files.filter((file) => file.id !== selectedFile.id);
    setFiles(newFiles);
    // select the first file left in the list
    setSelectedFile(newFiles[0]);
    setShowDeleteModal(false);
  };

  // Close the modal without deleting
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="relative ml-auto">
      {/* Delete icon triggers the modal */}
      <button className="mr-2" onClick={handleOpenDeleteModal}>
        <CustomDeleteIcon />
      </button>

      {/* Error info */}
      {error && <ErrorDiv error={error} setError={setError} />}

      {/* Delete confirmation modal */}
      {showDeleteModal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div
            className="bg-palette-100 dark:bg-palette-900 
          p-6 rounded-[4px] max-w-sm h-[218px] w-[`min(345px, 90%)`]
          flex flex-col gap-4"
          >
            <div className="flex flex-row justify-between">
              <h2 className="text-[20px] font-bold dark:text-palette-100 text-palette-700">
                Delete this document?
              </h2>

              <button onClick={handleCancelDelete}>
                <img src={closeModalIcon} alt="close-modal-icon" />
              </button>
            </div>
            <p className="text-palette-500 text-[14px]">
              Are you sure you want to delete
              <br />'{selectedFile?.name}' and its content?
              <br />
              This action cannot be renewed.
            </p>
            <button
              className="w-[295px] h-[40px]
              text-palette-100 bg-orange hover:bg-orange-hover active:bg-orange
              flex items-center justify-center rounded-[4px]
              text-palette-100 cursor-pointer"
              onClick={handleConfirmDelete}
            >
              <span className="flex text-[15px] items-center justify-center h-[18px] text-fit">
                Confirm and Delete
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteButton;
