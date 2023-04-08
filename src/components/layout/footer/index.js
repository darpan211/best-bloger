import TotalUserCount from "@/components/TotalUserCount";
import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  link: "delay-150 hover:delay-[0ms] cursor-pointer hover:text-opacity-100 font-medium text-base text-white text-opacity-50",
};

const Footer = () => {
  const router = useRouter();
  const links = [
    ["Terms of Use", "/terms"],
    ["Privacy Policy", "/privacy"],
  ];
  return (
    <>
      <div>
        <footer className={`container-main flex flex-col`}>
          <div className="flex items-center lg:gap-8 gap-2 xxs:text-center flex-col lg:flex-row justify-center pt-16">
            {links.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={`relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:delay-[0ms]`}
              >
                <span
                  className={`relative z-10 text-white text-opacity-50 text-[17px] routeLink font-medium cursor-pointer ${router.pathname === href ? "activeLinkRoute" : ""
                    }`}
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>
          <div className="pb-16 ">
            <p className={`${style.link} !font-normal mt-8 text-center `}>
              © {(new Date).getFullYear()} oct. All rights reserved.
            </p>
          </div>
        </footer>
        <div className="flex">
          <TotalUserCount />
        </div>
      </div>

    </>

  );
};

export default Footer;
