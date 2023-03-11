import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'
import NextLink from 'next/link'
import Styles from './index.module.css'

const links = [
  { name: 'General', href: '/faq/questions/general', current: true, path: "/images/svg/octopus-logo.png" },
  { name: 'User Questions', href: '/faq/questions/user', current: false, path: "/images/svg/user.svg" },
  { name: 'Creator Questions', href: '/faq/questions/creator', current: false, path: "/images/svg/earn.svg" },
]

const QuestionsSidebar = () => {
  const { pathname } = useRouter()
  const router = useRouter()

  return (
    <aside className="py-6 lg:py-0 lg:mr-4 lg:col-span-5">
      <div>
        <h2 className='text-4xl font-semibold text-white'>FAQs</h2>
        <p className='text-lg text-gray-300 pt-3 pb-12'>Everything you need to know about the app and community. Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
      </div>
      <nav className="bg-white/[0.05] lg:mr-16 border-white/[0.1] rounded-xl pt-6 text-white">
        {links.map((item) => (
          <NextLink
            href={item.href}
            scroll={false}
            key={`${item.name}-${Math.random() * 100}`}
          >
            <div
              className={twMerge(
                pathname === item.href
                  ? 'bg-white/[0.05] text-base border-l-4 border-[#E61AEF]'
                  : 'border-transparent hover:bg-white/[0.05]',
                'group border-l-4 px-4 py-3 flex items-center text-sm font-medium',
              )}
              aria-current={item.href === pathname ? 'page' : null}
            >
              <div className="truncate flex items-center ">
                <div
                  className='w-12 h-12 rounded-3xl mr-3 bg-white/[0.05] flex items-center justify-center'
                >
                  <img src={item.path} alt='logo' className='h-6 w-6'/>
                </div>
                {item.name}
              </div>
            </div>
          </NextLink>
        ))}
        <div onClick={() => router.push("/contact")} className='flex bg-white/[0.05] pl-6 items-center cursor-pointer  gap-x-3 py-6 mt-6 text-base font-medium'>
          <img src='/images/svg/message.svg' alt='message' />
          <p className={`${Styles.gradientText}`}>Contact us</p>
        </div>
      </nav>
    </aside>
  )
}

export default QuestionsSidebar
