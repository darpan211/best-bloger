import React, { useRef } from "react";
import styles from "./fileinput.module.css";
import { useWindowSize } from "@/utils/useWindowSize";
import Upload from "@/components/svgs/upload";

const noop = () => {};
const FileInput = ({ label, onChange, textChange, rounded, filled }) => {
  const fileRef = useRef(null);
  const windowSize = useWindowSize();
  const openFileInput = () => {
    fileRef.current.click();
  };

  return (
    <div
      className={` ${
        textChange
          ? "mt-4 bg-transparent border-2 border-dashed border-white/[0.09] py-6 mb-7 rounded-lg"
          : "h-48 mt-5"
      } ${filled && "bg-white/[0.05]"}`}
      onClick={() => {
        if (textChange) {
          openFileInput();
        }
      }}
    >
      <div className="w-[90%] mx-auto flex flex-col items-center rounded-full">
        <label className="bg-white/[0.05] p-3 rounded-full my-1">
          <Upload />
        </label>
        <label
          htmlFor="input"
          className={`${styles.label} text-[#6938EF] text-center ${
            windowSize.width < 300 ? "text-sm" : "text-lg"
          } `}
        >
          Click to upload
        </label>
        <input
          ref={fileRef}
          type="file"
          id="input"
          className={`w-40 ${styles.input} text-center`}
          onChange={onChange}
        />
        <div className="text-center mt-1">
          <p
            className={`text-gray-400 text-xs text-center ${
              windowSize.width < 300 ? "text-[11px]" : "text-xs"
            }`}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default FileInput;
