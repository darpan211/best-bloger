import SharedLayout from '../../../components/layout/shared-layout'
import styles from './index.module.css'
import LinksDropdown from './LinksDropdown'
import { PrivacyData } from './data'

const Privacy = () => {
  return (
    <SharedLayout title='privacy' className='!z-10'>
      <div className='lg:mx-20 mx-2 lg:px-20 lg:pb-28 fontInter'>
        <h1 className={`${styles.gradientText} lg:pt-24 pb-6 my-2 lg:text-6xl text-5xl font-bold text-center `}>Privacy Policy</h1>
        <p className='lg:pb-24 pb-10 lg:w-[960px] text-white text-2xl text-center mx-auto'>Generally, we may collect and use personal information for many purposes, including, but not limited to: billing, product and service fulfillment, understanding customer needs, providing a better website, improving products and services, and communicating with customers and potential customers regarding our products and services with third-party products and services.
        </p>
        <div className='grid grid-cols-10'>
          <div className='lg:col-span-7 col-span-12'>
            <div className='flex justify-center md:hidden block py-4 border-b-[1px] mb-4'>
              <LinksDropdown list={PrivacyData} field={'heading'} />
            </div>
            {PrivacyData.map((item, i) => {
              return (
                <div id={i + 1} key={i} className="flex flex-col mb-8">
                  <div className='text-3xl text-white font-semibold pb-6'>{item?.heading}</div>
                  <div className='text-lg text-white/[0.85] font-bold pb-4'>{item?.title}</div>
                  <div className='text-lg text-white/[0.85] z-10'>{item.desc}</div>
                </div>
              );
            })}
            <div className='absolute top-[2600px] w-[775px] h-[700px] blur-xl right-0'>
              <img src='/images/background-2.png' alt='bg' />
            </div>
            <div className='absolute top-[3800px] w-[775px] h-[700px] blur-xl left-0 '>
              <img src='/images/background-3.png' alt='bg' />
            </div>
          </div>
          <div className='lg:col-span-3 lg:pl-12 lg:block xxs:hidden col-span-12'>
            <h4 className={`${styles.gradientText} text-base font-semibold`}>Table of contents</h4>
            {PrivacyData.map((v, i) => (
              <a key={i} href={`#${i}`}><p key={i} className='text-base font-semibold text-white/[0.5] my-3 cursor-pointer'>{v.heading}</p></a>
            ))}
            <div className='border-b-[1px] text-white/[0.85] my-5' />
          </div>
        </div>
      </div>
    </SharedLayout>
  )
}

export default Privacy