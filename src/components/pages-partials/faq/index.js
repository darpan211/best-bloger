import { Container } from '@/components/components/Container'
import Link from 'next/link'
import React from 'react'
import SharedLayout from '../../layout/shared-layout'
import FaqHeader from './header'
import QuestionsSidebar from './sidebar'

const FaqLayout = ({ children }) => {
  
  return (
    <SharedLayout title={"FAQ"}>
      <Container className='xs:px-8 px-1'>
      <div className="lg:pb-16 fontInter">
        <FaqHeader />
        <div className="overflow-hidden rounded-lg">
          <div className="divide-y lg:grid lg:grid-cols-12 lg:divide-y-0 ">
            <QuestionsSidebar />
            <div className=" lg:col-span-7">
              <div className="px-4 py-6 sm:p-6 lg:pl-0 lg:pr-0 lg:pt-0 lg:pb-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:px-24 lg:py-12 lg:flex justify-between grid grid-cols-12 p-8 bg-white/[0.05] rounded-2xl mb-24 fontInter'>
        <div className='col-span-12 lg:w-[640px]'>
          <p className='lg:text-5xl text-3xl font-semibold text-white mb-5'>Still have questions?</p>
          <p className={`lg:text-2xl text-xl font-medium lg:pr-24 pb-2 text-white/[0.5]`}>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        </div>
        <div className='flex flex-row items-center col-span-12'>
          <Link
            href="/contact">
            <button
              className="bg-[#6938EF] rounded-xl mx-auto py-4 px-7 flex items-center justify-center font-bold text-lg text-white"
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
      </Container>
    </SharedLayout>
  )
}

export default FaqLayout