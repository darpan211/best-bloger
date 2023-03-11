// import Disclosure from '@/components/common/disclosure'
// import FaqLayout from '@/components/pages-partials/faq'
import { CreatorQuestions } from '@/components/pages-partials/faq/data'
import React from 'react'

const Creator = () => {
  return (
    // <FaqLayout>
      <div className="md:grid md:grid-cols-12 ">
        <div className="mt-5 mb-16 md:mb-0 md:mt-0 md:col-span-12 z-10">
          {CreatorQuestions.map((v, i) => (
            {/* <Disclosure data={v} key={i} /> */}
          ))}
        </div>
      </div>
    // </FaqLayout>
  )
}

export default Creator