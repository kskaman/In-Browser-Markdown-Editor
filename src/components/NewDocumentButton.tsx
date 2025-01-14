const NewDocumentButton = () => {
  return (
    <button
      className="w-[202px] h-[40px]
            text-palette-100 bg-orange hover:bg-orange-hover active:bg-orange  
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
