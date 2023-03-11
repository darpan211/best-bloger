const ArrowBack = ({ textColor }) => {
  return (
    <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer"
  >
    <path
      d="M6.5 11L1.5 6L6.5 1"
      stroke={textColor === 'text-white' ? "#FFFFFF" : "#6938EF"}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  )
}

export default ArrowBack
