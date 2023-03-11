import React from 'react'

const style = {
  'waves': 'w-1 h-12 bg-white m-1 rounded-[20px] animate-waveAnimation wave'
}
const LineAnimation = () => {
  return (
    <div className='flex'>
      <div className={style.waves}></div>
      <div className={style.waves}></div>
      <div className={style.waves}></div>
      <div className={style.waves}></div>
    </div>
  )
}

export default LineAnimation