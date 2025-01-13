const ConfirmButton = () => {
  return (
    <button
      className="w-[295px] h-[40px]
              text-pure-white bg-coral-orange hover:bg-peach-sunset  
              flex items-center justify-center rounded-[4px]
              text-pure-white cursor-pointer
          "
    >
      <span className="flex text-[15px] items-center justify-center h-[18px] text-fit">
        Confirm and Save
      </span>
    </button>
  );
};

export default ConfirmButton;
