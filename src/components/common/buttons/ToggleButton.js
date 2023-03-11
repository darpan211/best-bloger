import React from "react";
import styles from "./toggle.module.css";
import "react-datepicker/dist/react-datepicker.css";

export const ToggleButton = ({
  selected,
  toggleSelected,
  toggleContent,
  title,
  icons,
  isTime = false,
  classes
}) => {
  return (
    <div className=" mt-9">
      <div
        className={`${classes ? classes : "border border-gray-600 rounded-l-xl rounded-r-xl"}  p-2 max-w-[500px] mx-auto`}
        onClick={toggleSelected}
      >
        <div className={`h-full text-white w-full flex ${selected ? "" : "left-4"}`}>
          <button
            className={` p-3 w-1/2 rounded-lg h-[52px] flex justify-center items-center ${
              !selected ? "bg-color-purple-600" : isTime ? styles.btnTime : styles.btn
            }`}
          >
            <p className=" flex text-sm whitespace-nowrap">
              {icons && <span className="text-xl mr-1">{icons.firstIcon}</span>}
              {title?.first}
            </p>
          </button>
          <button
            className={`p-3 w-1/2 rounded-lg h-[52px] flex items-center justify-center ${
              selected ? "bg-color-purple-600" : styles.btn
            }`}
          >
            <p className="flex text-sm whitespace-nowrap text-center">
              {icons && <span className=" text-lg mr-1">{icons.secondIcon}</span>}
              {title.second}
            </p>
          </button>
        </div>
      </div>
      {toggleContent && <div className="mt-10">{selected && toggleContent}</div>}
    </div>
  );
};
