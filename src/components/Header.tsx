import FileName from "./FileName";
import SaveButton from "./SaveButton";

import menuIcon from "../assets/icon-menu.svg";

const Header = () => {
  return (
    <div className="h-[72px] bg-palette-800 flex flex-row items-center">
      {/* Menu Container */}
      <div className="w-[72px] h-[72px] flex justify-center items-center bg-palette-700">
        <img src={menuIcon} width="30px" height="18px" />
      </div>

      <div className="flex w-[184px] items-center justify-center">
        <div className="text-palette-100 bold text-[15px]"> MARKDOWN</div>
      </div>
      {/* Vertical Divider */}
      <div className="h-[40px] w-[1px] bg-palette-600"></div>
      {/* FileName Container */}
      <FileName />

      {/* Save Button */}
      <SaveButton />
    </div>
  );
};

export default Header;
