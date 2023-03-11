import React from "react";
import styles from "./buttons.module.css";
const PurpleButton = ({
  title,
  outlined,
  onClick,
  children,
  classes,
  isTranparent,
  icon,
  isFollowAndSubscribe,
  withPadding = true,
  withMargin = true,
  rounded = null,
  disabled = false,
  isGrayBorder = false,
  ...props
}) => {
  return (
    <button
        disabled={disabled}
      {...props}
      onClick={onClick}
      className={`flex items-center justify-center z-20 ${
        rounded ? rounded : "rounded-full"
      }  border ${withPadding ? "px-4" : ""} ${
        withMargin ? "mb-4" : ""
      } ${classes} ${outlined
        ? `${
              isTranparent
                ? styles.border_tranparent
                : "border-indigo-500 text-indigo-500"
            }`
        : "border-transparent text-white bg-color-purple-600"
        }  w-full h-[44px] leading-[44px] text-base font-medium focus:outline-none
        ${isFollowAndSubscribe ? styles.opacity__btn : "hover:bg-indigo-700"}
        ${isGrayBorder ? styles.border_white : ""}
        `}
    >
      {icon && (
        <div className={`${isFollowAndSubscribe ? "order-2 ml-2" : "mr-2"}`}>
          {icon}
        </div>
      )}
      {!!title ? title : children}
    </button>
  );
};
export default PurpleButton;
