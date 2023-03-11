const UnFilledMessageIcon = ({ strokeWidth = '1.5' }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 10.5H15.5"
        stroke="white"
        strokeWidth={strokeWidth}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 18.4297H11L15.45 21.3897C16.11 21.8297 17 21.3597 17 20.5597V18.4297C20 18.4297 22 16.4297 22 13.4297V7.42969C22 4.42969 20 2.42969 17 2.42969H7C4 2.42969 2 4.42969 2 7.42969V13.4297C2 16.4297 4 18.4297 7 18.4297Z"
        stroke="white"
        strokeWidth={strokeWidth}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  )
}

export default UnFilledMessageIcon