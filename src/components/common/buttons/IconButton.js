import React from "react";
import styles from "./buttons.module.css";

const IconButton = ({
  title,
  outlined,
  activeTab,
  onClick,
  icon,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={
        activeTab
          ? ` ${styles.message_round} flex
         items-center
         text-white
        w-full h-[44px] leading-[48px] text-base rounded-[8px] px-4 font-medium focus:outline-none 
        focus:ring-4 focus:ring-indigo-500 bg-[#6938EF]  mb-3`
          : ` ${styles.message_round} flex
         items-center
         text-white
        w-full h-[44px] leading-[48px] text-base rounded-[8px] px-4 font-medium focus:outline-none 
        focus:ring-4 focus:ring-indigo-500 bg-red mb-3 `
      }
    >
      <div
        className={`${styles.icon_round} rounded-2xl mr-3 flex items-center justify-center`}
      >
        {icon}
      </div>
      {title}
    </button>
  );
};

export default IconButton;
