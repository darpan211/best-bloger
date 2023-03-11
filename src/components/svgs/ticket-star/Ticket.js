import React from 'react'

const Ticket = ({ height = 21, width = 21 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7501 10.4663C16.7501 9.31627 17.6834 8.38293 18.8334 8.38293V7.5496C18.8334 4.21627 18.0001 3.38293 14.6667 3.38293H6.33341C3.00008 3.38293 2.16675 4.21627 2.16675 7.5496V7.96627C3.31675 7.96627 4.25008 8.8996 4.25008 10.0496C4.25008 11.1996 3.31675 12.1329 2.16675 12.1329V12.5496C2.16675 15.8829 3.00008 16.7163 6.33341 16.7163H14.6667C18.0001 16.7163 18.8334 15.8829 18.8334 12.5496C17.6834 12.5496 16.7501 11.6163 16.7501 10.4663Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.83325 3.38293L8.83325 16.7163"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="5 5"
      />
    </svg>

  )
}

export default Ticket