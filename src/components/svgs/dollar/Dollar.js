import React from 'react'

const Dollar = ({ height = 20, width = 12, color = '#6938EF' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 13.3346C1 15.1756 2.49238 16.668 4.33333 16.668H7.66667C9.50762 16.668 11 15.1756 11 13.3346C11 11.4937 9.50762 10.0013 7.66667 10.0013H4.33333C2.49238 10.0013 1 8.50892 1 6.66797C1 4.82702 2.49238 3.33464 4.33333 3.33464H7.66667C9.50762 3.33464 11 4.82702 11 6.66797M6 1.66797V18.3346"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  )
}

export default Dollar