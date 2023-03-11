import DollarIcon from "@/components/svgs/dollar";
import NewDallor from "@/components/svgs/newDollor";
import React from "react";
import styles from "./priceinput.module.css";

const PriceInput = ({
  tag,
  id,
  value,
  type,
  onChange,
  onKeyDown,
  classes,
  placeholder,
  inputClasses,
  btnClasses,
  disabled,
  maxLength,
  doller,
  emailInput,
  handleClick,
  ...props
}) => {
  return (
    <div className={classes}>
      {doller === true ? (
        <button
          className={`${btnClasses} ${styles.priceinput2} rounded-l-lg rounded-r-none  `}
        >
        <NewDallor/>
        </button>
      ) : null}
      <input
        placeholder={placeholder}
        className={ doller === true ?` ${styles.priceinput} ${inputClasses} text-sm rounded-r-lg placeholder:text-right` : ` ${styles.priceinput} ${inputClasses} text-sm rounded-l-lg `}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
        onKeyDown={onKeyDown}
        maxLength={maxLength}
        id={id}
        {...props}
      />
      <button type='button' className={`${btnClasses} ${styles.priceinput} rounded-r-lg`} onClick={handleClick}>{tag}</button>
    </div>
  );
};

export default PriceInput;
