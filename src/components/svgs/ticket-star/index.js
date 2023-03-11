import React from "react";

const TicketStar = ({stroke,width,height}) => {
  return (
    <div>
      <svg
        width={width? width : "26"}
        height={height? height : '26'}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.1369 6.57031H10.8512C5.3798 6.57031 3.85123 7.8846 3.72266 12.9989C6.4798 12.9989 8.70837 15.2417 8.70837 17.9989C8.70837 20.756 6.4798 22.9846 3.72266 22.9989C3.85123 28.1132 5.3798 29.4275 10.8512 29.4275H25.1369C30.8512 29.4275 32.2798 27.9989 32.2798 22.2846V13.7132C32.2798 7.99888 30.8512 6.57031 25.1369 6.57031Z"
          stroke={stroke ? stroke :"white"}
          strokeWidth="1.85714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.7031 6.57031V11.5703"
          stroke={stroke ? stroke :"white"}
          strokeWidth="1.85714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.7031 24.4258V29.4258"
          stroke={stroke ? stroke :"white"}
          strokeWidth="1.85714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.3273 14.1837L23.213 15.9694C23.2987 16.1408 23.4702 16.2694 23.6559 16.298L25.6273 16.5837C26.113 16.6551 26.313 17.2551 25.9559 17.598L24.5273 18.9837C24.3845 19.1123 24.3273 19.3123 24.3559 19.5123L24.6987 21.4694C24.7845 21.9551 24.2702 22.3266 23.8416 22.098L22.0845 21.1694C21.913 21.0837 21.6987 21.0837 21.5273 21.1694L19.7702 22.098C19.3273 22.3266 18.8273 21.9551 18.913 21.4694L19.2559 19.5123C19.2845 19.3123 19.2273 19.1266 19.0845 18.9837L17.6702 17.598C17.313 17.2551 17.513 16.6551 17.9987 16.5837L19.9702 16.298C20.1702 16.2694 20.3273 16.1551 20.413 15.9694L21.2845 14.1837C21.4845 13.7408 22.113 13.7408 22.3273 14.1837Z"
          stroke={stroke ? stroke :"white"}
          strokeWidth="1.85714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default TicketStar;
