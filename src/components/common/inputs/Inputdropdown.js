import ArrowDown from "@/components/svgs/arrow-down";

import styles from "./inputs.module.css";

const InputDrop = ({ value, onChange, classes, icon ,inputClasses, placeholder,...props }) => {
  return (
    <div className={`${styles.searchInputBg} ${classes} p-3 flex items-center gap-3 rounded-lg`}>
     
      <input {...props} placeholder={placeholder ? placeholder : "Search by profile name"} className={`bg-transparent text-sm ${styles.searchInputColor} ${inputClasses} w-full outline-none`} value={value} onChange={onChange} />
      {icon ? icon : <ArrowDown />}
    </div>
  )
}

export default InputDrop