import React from 'react'

const MasterCardWithoutBg = () => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={10} cy={16} r={9} fill="#E80B26" />
      <circle cx={22} cy={16} r={9} fill="#F59D31" />
      <path
        d="M16 22.7095C17.8413 21.0615 19 18.6667 19 16.0012C19 13.3357 17.8413 10.9409 16 9.29297C14.1587 10.9409 13 13.3357 13 16.0012C13 18.6667 14.1587 21.0615 16 22.7095Z"
        fill="#FC6020"
      />
    </svg>

  )
}

export default MasterCardWithoutBg