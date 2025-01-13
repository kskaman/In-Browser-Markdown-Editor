const NewDocumentButton = () => {
  return (
    <button
      className="w-[202px] h-[40px]
            text-pure-white bg-coral-orange hover:bg-peach-sunset  
            flex items-center justify-center rounded-[4px]
            text-pure-white cursor-pointer
        "
    >
      <span className="flex text-[15px] items-center justify-center h-[18px] text-fit">
        + New Document
      </span>
    </button>
  );
};

export default NewDocumentButton;
