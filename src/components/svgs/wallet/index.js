const WalletIcon = ({width,height}) => {
  return (
    <svg
      width={width ? width : 18}
      height={height ? height : 17}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.75 10.1667H12.7583M1.5 2.66667V14.3333C1.5 15.2538 2.24619 16 3.16667 16H14.8333C15.7538 16 16.5 15.2538 16.5 14.3333V6C16.5 5.07953 15.7538 4.33333 14.8333 4.33333L3.16667 4.33333C2.24619 4.33333 1.5 3.58714 1.5 2.66667ZM1.5 2.66667C1.5 1.74619 2.24619 1 3.16667 1H13.1667M13.1667 10.1667C13.1667 10.3968 12.9801 10.5833 12.75 10.5833C12.5199 10.5833 12.3333 10.3968 12.3333 10.1667C12.3333 9.93655 12.5199 9.75 12.75 9.75C12.9801 9.75 13.1667 9.93655 13.1667 10.1667Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default WalletIcon