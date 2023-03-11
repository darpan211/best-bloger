import React from "react";
import styles from "./buttons.module.css";

const GradientButton = ({ onClick, children, classes, roundedFull = true ,disabled = false,...props}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      {...props}
      className={`${styles.gradient__btn} gradientAnimation ${classes} text-center ${
        roundedFull ? "rounded-full" : ""
      } text-white`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
