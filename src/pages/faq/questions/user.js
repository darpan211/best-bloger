// import Disclosure from '@/components/common/disclosure'
// import FaqLayout from '@/components/pages-partials/faq'
import { UserQuestions } from '@/components/pages-partials/faq/data'
import React from 'react'

const User = () => {
  return (
    // <FaqLayout>
      <div>
        <div className="md:grid md:grid-cols-12">
          <div className="mt-5 mb-16 md:mb-0 md:mt-0 md:col-span-12 z-10">
            {UserQuestions.map((v, i) => (
              <Disclosure data={v} key={i} />
            ))}
          </div>
        </div>
      </div>
    // </FaqLayout>
  )
}

export default User