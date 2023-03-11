import Link from 'next/link'
import { useRouter } from 'next/router'
export function NavLinks() {
  const router = useRouter()
  return [
    ['Home', '/Home'],
    ['About', '/about'],
    ['Blogs', '/'],
    // ['FAQ', '/faq/questions/general'],
    ['Contact', '/contact'],

  ].map(([label, href]) => (
    <Link
      key={label}
      href={href}
      className={`relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:delay-[0ms]`}
    >
      <span className={`relative z-10 text-white text-opacity-50 text-base routeLink font-medium cursor-pointer ${router.pathname === href ? "activeLinkRoute" : ""}`}>{label}</span>

    </Link>
  ))
}
