const SingleUserIcon = ({stroke= 'white', strokeWidth= '1.66667'}) => {
  return (
    <svg
      width={18}
      height={16}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 15.1667C3.44649 13.1021 6.08918 11.8333 9 11.8333C11.9108 11.8333 14.5535 13.1021 16.5 15.1667M12.75 4.75C12.75 6.82107 11.0711 8.5 9 8.5C6.92893 8.5 5.25 6.82107 5.25 4.75C5.25 2.67893 6.92893 1 9 1C11.0711 1 12.75 2.67893 12.75 4.75Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SingleUserIcon