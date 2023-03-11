import React from "react";

const CurrencyDollar = ({color}) => {
  return (
    <div>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4533_23682)">
          <path
            d="M5 13.3854C5 15.2264 6.49238 16.7188 8.33333 16.7188H11.6667C13.5076 16.7188 15 15.2264 15 13.3854C15 11.5445 13.5076 10.0521 11.6667 10.0521H8.33333C6.49238 10.0521 5 8.5597 5 6.71875C5 4.8778 6.49238 3.38542 8.33333 3.38542H11.6667C13.5076 3.38542 15 4.8778 15 6.71875M10 1.71875V18.3854"
            stroke={color ? color : "#6938EF"}
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4533_23682">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0 0.0507812)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default CurrencyDollar;
