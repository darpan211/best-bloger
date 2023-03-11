import { Popover } from '@headlessui/react'

const PopoverButton = ({ display, data }) => {
  return (
    <Popover className="relative z-10">
      <Popover.Button className='bg-white/[0.05] mb-1 p-2.5 shadow-sm rounded-lg cursor-pointer focus:outline-none !z-10'>{display}</Popover.Button>
      <Popover.Panel className="absolute z-10">
        <div className="lg:bg-white/[0.05] bg-[#0E0125] border-white/[0.05] border lg:border-none rounded-lg px-2 py-3 shadow-sm space-y-5">
          {data.map((item, key) => (
            <div key={key} className='cursor-pointer'>{item.icon}</div>
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  )
}
export default PopoverButton;