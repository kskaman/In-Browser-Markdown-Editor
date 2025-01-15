import saveIcon from "../assets/icon-save.svg";

const InteractiveButton = () => {
  return (
    <button
      className="w-[152px] h-[40px] bg-orange
          flex items-center justify-center gap-[8px]
          hover:bg-orange-hover active:bg-orange text-palette-100 rounded-[4px]
          cursor-pointer mx-4
          "
    >
      <img src={saveIcon} alt="Save Icon" className="w-4 h-4" />
      <span className="-mt-1.5 text-[15px] h-[18px]">Save Changes</span>
    </button>
  );
};

export default InteractiveButton;
