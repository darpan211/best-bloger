import Clear from "@/components/svgs/clear";
import CustomDeleteIcon from "@/components/svgs/custom-dekete-icon";
import Delete from "@/components/svgs/delete";
import InputSearchIcon from "@/components/svgs/InputSearch";
import styles from "./inputs.module.css";

const SearchInput = ({
  value,
  onChange,
  onBlur,
  name,
  type,
  classes,
  icon,
  reset,
  placeholder,
  inputClassName,
  id,
  ...props
}) => {
  return (
    <div
      className={`${styles.searchInputBg} ${classes} p-3 flex items-center gap-3 rounded-lg`}
    >
      {icon ? icon : <InputSearchIcon />}
      <input
        {...props}
        placeholder={placeholder ? placeholder : "Search by profile name"}
        className={`bg-transparent text-sm w-full focus:bg-color-purple border-none focus:border-transparent focus:ring-0 resize-none focus:outline-none`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        id={id}
        type={type ? type : null}
      />
      {reset && <span onClick={props?.resetSearch}><CustomDeleteIcon /></span>}
    </div>
  );
};

export default SearchInput;
