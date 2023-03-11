import React from "react";

const ProfileTick = ({stroke ,height, width}) => {
  return (
    <svg
      width={width ?width : "35"}
      height={height? height : "36"}
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9844 28.0699L23.1558 30.2413L27.4987 25.8984"
        stroke={stroke ? stroke :"white"}
        strokeWidth="1.85714"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.7277 16.3863C17.5849 16.372 17.4134 16.372 17.2563 16.3863C13.8563 16.272 11.1563 13.4863 11.1563 10.0577C11.142 6.5577 13.9849 3.71484 17.4849 3.71484C20.9849 3.71484 23.8277 6.5577 23.8277 10.0577C23.8277 13.4863 21.1134 16.272 17.7277 16.3863Z"
        stroke={stroke ? stroke :"white"}
        strokeWidth="1.85714"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4883 32.0122C14.8883 32.0122 12.3026 31.355 10.3311 30.0407C6.874 27.7265 6.874 23.955 10.3311 21.655C14.2597 19.0265 20.7026 19.0265 24.6311 21.655"
        stroke={stroke ? stroke :"white"}
        strokeWidth="1.85714"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileTick;
