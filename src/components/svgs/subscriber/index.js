
const SubscriberIcon = ({ stroke = "#667085", strokeWidth = '1.5', height=20, width=20 }) => {
  return (
    <svg
    width={width}
    height={height}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.7513 10.4154C16.7513 9.26536 17.6846 8.33203 18.8346 8.33203V7.4987C18.8346 4.16536 18.0013 3.33203 14.668 3.33203H6.33464C3.0013 3.33203 2.16797 4.16536 2.16797 7.4987V7.91536C3.31797 7.91536 4.2513 8.8487 4.2513 9.9987C4.2513 11.1487 3.31797 12.082 2.16797 12.082V12.4987C2.16797 15.832 3.0013 16.6654 6.33464 16.6654H14.668C18.0013 16.6654 18.8346 15.832 18.8346 12.4987C17.6846 12.4987 16.7513 11.5654 16.7513 10.4154Z"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.83203 3.33203L8.83203 16.6654"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="5 5"
    />
  </svg>
  )
}

export default SubscriberIcon