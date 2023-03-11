import React from "react";

const TickCircle = ({classes}) => {
  return (
    <div className={`${classes}`}>
      <svg
        width="36"
        height="35"
        viewBox="0 0 36 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0045 31.7863C25.8616 31.7863 32.2902 25.3577 32.2902 17.5006C32.2902 9.64342 25.8616 3.21484 18.0045 3.21484C10.1473 3.21484 3.71875 9.64342 3.71875 17.5006C3.71875 25.3577 10.1473 31.7863 18.0045 31.7863Z"
          stroke="white"
          strokeWidth="1.85714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9297 17.4999L15.9725 21.5427L24.0725 13.457"
          stroke="white"
          strokeWidth="1.85714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default TickCircle;
