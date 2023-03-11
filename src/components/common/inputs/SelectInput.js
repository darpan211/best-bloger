import React, { useState } from "react";
import styles from "./inputs.module.css";

const SelectInput = ({ options, onChange, isFullWidth, value, classes, smallBox  }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={`relative inline-block text-left ${classes} ${isFullWidth ? 'w-full' :!smallBox && 'w-[50%]'}`}>
        < div >
          <button
            type="button"
            className={`${styles.dropdown} inline-flex w-full h-[40px] items-center px-3 justify-between rounded-md text-white`}
            id="menu-button"
            onClick={() => setOpen(!open)}
          >
            {!value ? 'Options' : value}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#667085"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {
          open &&
          <div
            className={`${styles.dropdown} ${smallBox ? 'h-[40vh] overflow-y-scroll' : ''} absolute right-0 z-10 mt-1 w-full origin-top-right rounded-md bg-color-dark-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            role="menu"
            tabIndex={1}
          >
            <div className="py-1" role="none">

              {options.map((option, index) => (
                <option
                  key={index}
                  className="text-white hover:bg-white hover:bg-opacity-5 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex={1}
                  id='topic'
                  onClick={(e) => { setOpen(false), onChange(e) }}
                >
                  {option}
                </option>
              ))}
            </div>
          </div>
        }
      </div >

    </>
  );
};

export default SelectInput;
