import React from 'react'
import styles from './index.module.css'
const FaqHeader = () => {
  return (
    <div>
      <h1 className={`${styles.gradientText} text-5xl lg:text-[68px] font-semibold lg:font-black text-center lg:pt-28 pt-10 pb-6`}>FAQs</h1>
      <p className='text-2xl text-white lg:w-[682px] mx-auto text-center mb-4 lg:mb-24'>Need something cleared up? Here are our most frequently asked questions.</p>
    </div>
  )
}

export default FaqHeader