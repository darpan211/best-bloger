import React from 'react'

const EditPenIcon = ({width,height,opacity}) => {
  return (
    <svg
      width={width ? width : 16}
      height={height ? height : 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9974 6.66817L9.33075 4.0015M1.66406 14.3348L3.92031 14.0841C4.19597 14.0535 4.3338 14.0382 4.46263 13.9965C4.57692 13.9595 4.68569 13.9072 4.78599 13.8411C4.89903 13.7665 4.99709 13.6685 5.19321 13.4724L13.9974 4.66817C14.7338 3.93179 14.7338 2.73788 13.9974 2.0015C13.261 1.26512 12.0671 1.26512 11.3307 2.0015L2.52655 10.8057C2.33043 11.0018 2.23237 11.0999 2.15782 11.2129C2.09168 11.3132 2.03941 11.422 2.0024 11.5363C1.9607 11.6651 1.94539 11.8029 1.91476 12.0786L1.66406 14.3348Z"
        stroke="white"
        strokeOpacity={opacity ? opacity : "0.2"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default EditPenIcon