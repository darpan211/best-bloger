import React from "react";
import styles from "./inputs.module.css";

const CheckInput = ({ label, containerClasses, inputClasses, labelClasses, value,handleChange }) => {
  return (
    <div className={`${containerClasses ? containerClasses: `${styles.input} justify-between items-center flex my-5 p-2`}`}>
      <label className={labelClasses} htmlFor={label}>{label}</label>
      <input id={label} checked={value} className={value? inputClasses : "bg-[#ffffff20] border border-none rounded-[4px]"} type="checkbox" onChange={handleChange} />
    </div>
  );
};

export default CheckInput;
