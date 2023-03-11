import { useRouter } from "next/router";
import Footer from "../footer";
import Header from "../header";
import styles from "./index.module.css";

const SharedLayout = ({ children, title, className = "" }) => {
  const isDMCA = title === "DMCA";
  const isPrivacy = title === "privacy";
  const isResources = title === "resources";
  const isTerms = title === "terms&service";
  const isHome = title === "home";
  const isBlog = title === "Blog";
  const isAbout = title === "about";
  const router = useRouter();
  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-hidden bg-[#0E0125]">
      <Header />
      {isHome && (
        <>
          <div className={styles.directorSectionBg} >
            <img className='w-[875px] h-[800px]' src='/images/background/polygon-35.png' alt='bg' />
          </div>
          <div className={styles.discoverSectionBg} >
            <img className="w-[875px] h-[800px] blur-md" src='/images/background-3.png' alt='bg' />
          </div>
          <div className={styles.carouselRightBg} >
            <img className="w-[875px] h-[800px]" src='/images/background-2.png' alt='bg' />
          </div>
          <div className={styles.carouselLeftBg} >
            <img className="w-[875px] h-[1000px] blur-md" src='/images/background/middle-left.png' alt='bg' />
          </div>
          <div className={`${styles.bottomRight} h-[550px] w-[250px]`}>
            <img src="/images/background/background-32.png" alt='bg' />
          </div>
          <div className='absolute left-[-100px] bottom-0 h-[650px] w-[708px]'>
            <img src="/images/background/background-1.png" alt='bg' />
          </div>
        </>
      )}
      {isDMCA && (
        <>
          <div className={styles.middleRightCorner}>
            <img src="/images/background/middle-right.png" />
          </div>
          <div className={styles.middleLeftCorner}>
            <img src="/images/background/middle-left.png" />
          </div>
        </>
      )}
      {router.pathname === "/faq/questions/creator" && (
        <>
          <div className={`${styles.bottomRight} h-[152px] `}>
            <img src="/images/background/background-32.png" />
          </div>
        </>
      )}
      {isResources && (
        <div className={`${styles.resourceLeftBottomCorner} w-[400px]`}>
          <img src="/images/background/left-bottom.png" />
        </div>
      )}
      {isTerms && (
        <>
          <div className={`${styles.bottomLeftCorner}`}>
            <img src="/images/background/left-bottom.png" />
          </div>
          <div className={styles.middleRightCorner}>
            <img src="/images/background/middle-right.png" />
          </div>
          <div className={`${styles.bottomRightCorner}`}>
            <img src="/images/background/middle-right.png" />
          </div>
        </>
      )}
      {isBlog && (
        <div className={styles.bottomRightCorner}>
          <img src="/images/background/background-22.png" />
        </div>
      )}
      {isPrivacy && (
        <div className={styles.bottomRightCorner}>
          <img src="/images/background/background-22.png" />
        </div>
      )}
      {isAbout && (
        <>
          <div className='absolute left-0 bottom-[100px]'>
            <img className="w-[875px] h-[1000px] blur-md" src='/images/background/middle-left.png' alt='bg' />
          </div>
          <div className={`absolute bottom-0 right-0`}>
            <img className=" h-[600px] w-[600px]" src="/images/background/background-22.png" />
          </div>
        </>
      )}
      <main className={`${className} mt-20`}>{children}</main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
