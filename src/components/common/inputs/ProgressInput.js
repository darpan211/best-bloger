import React, { useRef, useEffect } from "react";
import styles from "./progressInput.module.css";

const ProgressInput = ({ value, setValue, isBlur, isProfile = false }) => {
  const progressRef = useRef();
  const tooltipRef = useRef();

  const progressChangeHandler = ({ target }) => {
    if (target.value > 3) {
      setValue(target.value);
      const tooltip = tooltipRef.current.children[0];
      if (target.value <= 10) {
        tooltip.style.transform = "translate(0%, 0%)";
        tooltip.style.top = "-3em";
        tooltip.style.left = "1em";
      } else if (target.value >= 98) {
        tooltip.style.transform = "translate(0%, 0%)";
        tooltip.style.top = "-3em";
        tooltip.style.right = "1rem";
      }
      progressRef.current.style.width = target.value + "%";
      tooltipRef.current.style.left = target.value + "%";
    }
  };
  const toolTip = isProfile ? 10 : 8.2;
  const toolTipValue = isBlur ? value : Math.round(value / toolTip);
  const toolTipHeading = isBlur ? "Blur: " : "months";
  return (
    <div className="relative select-none flex">
      <input
        type="range"
        step={isProfile ? 10 : 8}
        className="slider outline-none h-2 w-full rounded-sm"
        value={value}
        onChange={progressChangeHandler}
      />
      <div className={`${styles.sliderThumb} bg-gradient`} ref={tooltipRef}>
        <div className={`${styles.tooltip} ${value >= 64.4 && "left-[-50px]"}`}>
          <p
            className={`flex gap-1 font-medium ${isBlur ? "flex-row-reverse" : ""
              }`}
          >
            {toolTipValue}
            <span>{toolTipHeading}</span>
          </p>
        </div>
      </div>
      <div className={`${styles.progress} bg-gradient`} ref={progressRef}></div>
    </div>
  );
};

export default ProgressInput;
