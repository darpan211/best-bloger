import Head from "@/pages/Head";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import FavIcon from '../../../../public/images/oct-logo.png'
import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { NavLinks } from "../../components/NavLinks";

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavLink({ children, ...props }) {
  const router = useRouter()
  return (
    <Popover.Button
      as={Link}
      className={`block text-base leading-7 tracking-tight text-gray-700`}
      {...props}
    >
      <div
        className={`${(props.href !== "/join" && props.href === router.pathname) ? "activeLinkRoute" : ""}`}
      >{children}</div>
    </Popover.Button>
  );
}

const Header = () => {
  return (
    <>
      <Head />
      <header className="fixed top-0 left-0 right-0 z-[9999] bg-[#0E0125] mb-20">
        <nav className="bg-white/[0.02]">
          <Container className="relative z-50 flex justify-between items-center h-20">
            <div className="relative z-10 flex items-center gap-16">
              <Link href="/" aria-label="Home">
                <div className="cursor-pointer">
                  <Logo className="h-10" />
                </div>
              </Link>

            </div>
            <div className="hidden lg:flex h-20 lg:gap-10 justify-center items-center mx-auto">
              <NavLinks />
            </div>
            <div className="flex items-center gap-1">
              <Popover className="lg:hidden">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className="relative z-10 outline-none border border-opacity-50 m-2 inline-flex items-center rounded-lg p-2 hover:bg-gray-200/50 [&:not(:focus-visible)]:focus:outline-none"
                      aria-label="Toggle site navigation"
                    >
                      {({ open }) =>
                        open ? (
                          <ChevronUpIcon className="h-6 w-6 text-white" />
                        ) : (
                          <MenuIcon className="h-6 w-6" stroke={"#FFFFFF"} />
                        )
                      }
                    </Popover.Button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <Popover.Overlay
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                          />
                          <Popover.Panel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: -32,
                              transition: { duration: 0.2 },
                            }}
                            className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-[#0E0125] text-white text-center px-6 pb-6 pt-20 shadow-2xl shadow-gray-900/20"
                          >
                            <div className="space-y-4 flex flex-col mx-auto my-0">
                              <MobileNavLink className="text-red-700" href="/Home"><span className="cursor-pointer">Home</span></MobileNavLink>
                              <MobileNavLink href="/about"><span className="cursor-pointer">About</span></MobileNavLink>
                              <MobileNavLink href="/">
                                <span className="cursor-pointer">Blogs</span>
                              </MobileNavLink>
                              <MobileNavLink href="/contact">
                                <span className="cursor-pointer">Contact</span>
                              </MobileNavLink>
                            </div>
                          </Popover.Panel>
                        </>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Popover>
              {/* <button
              className="hidden lg:block text-white font-medium text-base cursor-pointer"
            >
              <Link href="/login"> Login</Link>
            </button> */}

            </div>
          </Container>
        </nav>
      </header>
    </>

  );
};
export default Header;
