import React from "react";
import styles from "./inputs.module.css";

const Input = ({ value, onChange, classes, placeholder, disabled, dollar,inputName, ...props }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        name={inputName}
        disabled={disabled}
        className={`${styles.input} ${classes}`}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default Input;
