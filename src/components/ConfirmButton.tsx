const ConfirmButton = () => {
  return (
    <button
      className="w-[295px] h-[40px]
              text-palette-100 bg-orange hover:bg-orange-hover active:bg-orange
              flex items-center justify-center rounded-[4px]
              text-palette-100 cursor-pointer
          "
    >
      <span className="flex text-[15px] items-center justify-center h-[18px] text-fit">
        Confirm and Save
      </span>
    </button>
  );
};

export default ConfirmButton;
