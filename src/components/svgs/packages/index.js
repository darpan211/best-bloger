import React from 'react'

const PackageIcon = ({ stroke = '#6938EF' }) => {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.2526 4.16797H13.7526C14.2693 4.16797 14.7276 4.18464 15.1359 4.24297C17.3276 4.48464 17.9193 5.51797 17.9193 8.33464V11.668C17.9193 14.4846 17.3276 15.518 15.1359 15.7596C14.7276 15.818 14.2693 15.8346 13.7526 15.8346H6.2526C5.73594 15.8346 5.2776 15.818 4.86927 15.7596C2.6776 15.518 2.08594 14.4846 2.08594 11.668V8.33464C2.08594 5.51797 2.6776 4.48464 4.86927 4.24297C5.2776 4.18464 5.73594 4.16797 6.2526 4.16797Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.75 1.66797H16.25" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.16406 18.332H16.6641" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default PackageIcon