import ArrowDown from '@/components/svgs/arrow-down'
import { Disclosure } from '@headlessui/react'

export default function LinksDropdown({ list,field }) {
  return (
    <div className="w-80 pt-2">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-transparent sticky top-0">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center w-full justify-between rounded-lg p-2 text-left text-sm font-medium text-blue-500 bg-white/[0.05] focus:outline-none">
                <h1>Table Of Contents</h1>
                <div className='flex gap-2 '>
                  <ArrowDown
                    height={12}
                    width={12}
                  />
                </div>
              </Disclosure.Button>
              {list.map((item, index) => (
                <Disclosure.Panel  key={index} className="text-base font-semibold text-white/[0.5] my-3 cursor-pointer">
                  <p><a href={`#${index}`}>{item[field]}</a></p>
                </Disclosure.Panel>
              ))}
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}