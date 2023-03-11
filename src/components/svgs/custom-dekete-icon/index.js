const CustomDeleteIcon = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_4961_121669)">
        <rect
          x="0.5"
          width="24"
          height="24"
          rx="12"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M15 9.5L10 14.5M10 9.5L15 14.5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_4961_121669"
          x="-15.5"
          y="-16"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4961_121669"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4961_121669"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default CustomDeleteIcon;
