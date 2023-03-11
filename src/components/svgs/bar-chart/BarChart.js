import React from 'react'

const BarChart = ({width,height}) => {
  return (
    <svg
      width={width ? width :14}
      height={height? height : 18}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 17V7M7 17V1M1 17V11"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  )
}

export default BarChart