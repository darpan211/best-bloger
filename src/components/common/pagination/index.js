import Icons from "@/components/icons"

const Pagination = () =>{
  return (
    <nav className="flex items-center justify-between border-t border-white border-opacity-10 bg-color-dark-900 pt-6">
      <div className="-mt-px flex w-0 flex-1">
        <a
          href="#"
          className="rounded-[8px] w-[36px] sm:w-auto h-[36px] sm:bg-transparent bg-white sm:bg-opacity-100 bg-opacity-5 justify-center inline-flex items-center border-t-2 border-transparent md:pr-1 pl-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <span className="m-0 sm:mr-3 w-5  text-gray-400" aria-hidden="true">
            <Icons iconName="ArrowLongLeftIcon" />
          </span>
          <span className="hidden sm:block">Previous</span>
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        
        <a
          href="#"
          className="inline-flex items-center justify-center bg-transparent text-opacity-50 rounded-[8px] w-[40px] h-[40px] px-4 text-sm font-medium text-white"
          aria-current="page"
        >
          1
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center bg-color-purple-600 rounded-[8px] w-[40px] h-[40px] px-4 text-sm font-medium text-white"
          aria-current="page"
        >
          2
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center bg-transparent text-opacity-50 rounded-[8px] w-[40px] h-[40px] px-4 text-sm font-medium text-white"
          aria-current="page"
        >
          3
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center bg-transparent text-opacity-50 rounded-[8px] w-[40px] h-[40px] px-4 text-sm font-medium text-white"
          aria-current="page"
        >
          ...
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center bg-transparent text-opacity-50 rounded-[8px] w-[40px] h-[40px] px-4 text-sm font-medium text-white"
          aria-current="page"
        >
          8
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center bg-transparent text-opacity-50 rounded-[8px] w-[40px] h-[40px] px-4 text-sm font-medium text-white"
          aria-current="page"
        >
          9
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center bg-transparent text-opacity-50 rounded-[8px] w-[40px] h-[40px] px-4 text-sm font-medium text-white"
          aria-current="page"
        >
          10
        </a>
      </div>
      <div className="text-white text-opacity-50 block sm:hidden">Page 1 of 10</div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
      <a
          href="#"
          className="rounded-[8px] w-[36px] sm:w-auto h-[36px] sm:bg-transparent bg-white sm:bg-opacity-100 bg-opacity-5 justify-center inline-flex items-center border-t-2 border-transparent pr-1 md:pl-0 pl-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <span className="hidden sm:block">Next</span>
          <span className="m-0 sm:ml-3 w-5 text-gray-400 m-auto" aria-hidden="true">
            <Icons iconName="ArrowLongRightIcon" />
          </span>
        </a>
        
      </div>
    </nav>
  )
}
export default Pagination
