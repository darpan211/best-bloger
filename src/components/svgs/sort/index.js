import React from "react";

const SortIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width={20}
      height={18}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 7H11M19 3H11M19 11H11M19 15H11M4 17L4 1M4 17L1 14M4 17L7 14M4 1L1 4M4 1L7 4"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SortIcon;
