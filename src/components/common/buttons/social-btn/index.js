import React from "react";

const SocialButton = ({
  title,
  outlined,
  handleAction,
  icon,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={handleAction}
      className="w-full justify-center rounded-[30px] h-[44px] leading-[44px] border border-gray-300 bg-white flex items-center px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 whitespace-nowrap"
    >
      {icon}
      <span className="ml-4">{title}</span>
    </button>
  );
};

export default SocialButton;
