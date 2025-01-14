import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleToggle = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - left;

    if (clickX < width / 2) {
      if (!isDarkMode) {
        toggleTheme();
      }
    } else {
      if (isDarkMode) {
        toggleTheme();
      }
    }
  };

  return (
    <div className="w-[160px] h-[72px] bg-palette-800 flex justify-center items-center">
      <div className="w-[104px] h-[24px] flex flex-row items-center justify-between">
        <MdOutlineDarkMode
          size={20}
          className="text-palette-600 dark:text-palette-100"
        />
        <div
          className="h-[24px] w-[48px] bg-palette-600 rounded-[14.5px] relative cursor-pointer"
          onClick={handleToggle}
        >
          <div
            className={`rounded-full bg-palette-100 absolute top-[5.75px] h-[12px] w-[12px] transition-all duration-300 ${
              isDarkMode ? "left-[6px]" : "left-[30px]"
            }`}
          ></div>
        </div>
        <MdOutlineLightMode
          size={20}
          className="text-palette-100 dark:text-palette-600"
        />
      </div>
    </div>
  );
};

export default ThemeButton;
