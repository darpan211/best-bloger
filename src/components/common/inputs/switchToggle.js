import React from "react";
import styles from "./switchToggle.module.css";

const SwitchToggle = ({ classes, label, value, setValue,margin="mb-4" }) => {
  return (
    <label htmlFor={label ?? "checked-toggle"} className={`${classes} inline-flex relative items-center ${margin} cursor-pointer`}>
      <input value={value} onChange={(e) => setValue && setValue(e.target.checked)} type="checkbox" id={label ?? "checked-toggle"} className="sr-only peer" />
      <div className={`${styles.switchBg} w-9 h-5 rounded-full peer peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-color-purple-600`}></div>
    </label>
  );
};

export default SwitchToggle;
