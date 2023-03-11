import React from "react";
import styles from "./dollar.module.css";

const DollarInput = ({
  tag,
  value,
  onChange,
  classes,
  placeholder,
  inputClasses,
  btnClasses,
  disable,
  maxLength,
  refrence,
  defaultValue,
  ...props
}) => {
  return (
    <div className={classes}>
      <button className={`${btnClasses} ${styles.input} rounded-l-lg`}>
        {tag}
      </button>
      <input
        ref={refrence}
        placeholder={placeholder}
        className={` ${styles.input} ${inputClasses} text-sm rounded-r-lg`}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        disabled={disable ? disable : false}
        defaultValue={defaultValue}
        {...props}
      />
    </div>
  );
};

export default DollarInput;
