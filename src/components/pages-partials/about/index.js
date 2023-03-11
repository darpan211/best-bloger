import { Container } from "@/components/components/Container";
import TotalUserCount from "@/components/TotalUserCount";
import SharedLayout from "../../layout/shared-layout";
import styles from "./index.module.css";
import TitleSvg from "./title-svg";



const About = () => {
  return (
    <>
      <SharedLayout title="about" className="pt-20">
        <div className="">
          <Container className='md:px-8 px-6'>
            <div className="relative">
              <div className="mx-auto text-lg">
                <div className="flex items-center w-full justify-center px-4 flex-col">
                  <div className={styles.about}>About us</div>
                  <h1 className={styles.title}>
                    <TitleSvg />
                  </h1>
                  <div className={`${styles.desc} `}>
                    No more payment discrimination, no more evil shenanigans.
                  </div>
                </div>
              </div>


              <section className="container mx-auto px-6 p-10">
                <div className="flex items-center flex-wrap mb-20">
                  <div className="w-full md:w-1/2 md:pr-10">
                    <h4 className={`${styles.descSecond} text-3xl font-bold mb-3`}>Vortex</h4>
                    <p className="text-gray-200 mb-8">Their primary target will be the power generators. Prepare to open the shield. Sir, Rebel ships are coming into our sector. Good. Our first catch of the day. Stand by, ion control....Fire! The first transport is away.</p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img className="rounded-lg" src="https://pbs.twimg.com/media/CR45LOXVEAADG5E.jpg" alt="Vortex" />
                  </div>
                </div>
                <div className="flex items-center flex-wrap mb-20">
                  <div className="w-full md:w-1/2">
                    <img className="rounded-lg" src="https://www.thesun.co.uk/wp-content/uploads/2019/06/SWJFO-EAPlay-08-1.jpg" alt="use the force" />
                  </div>
                  <div className="w-full md:w-1/2 md:pl-10">
                    <h4 className={`${styles.descSecond} text-3xl font-bold mb-3`}>Use the Force!</h4>
                    <p className="text-gray-200 mb-8">We'll never get it out now. So certain are you. Always with you it cannot be done. Hear you nothing that I say? Master, moving stones around is one thing. This is totally different. No! No different!</p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mb-20">
                  <div className="w-full md:w-1/2 md:pr-10">
                    <h4 className={`${styles.descSecond} text-3xl font-bold mb-3`}>Life creates it</h4>
                    <p className="text-gray-200 mb-8">There is no try. I can't. It's too big. Size matters not. Look at me. Judge me by my size, do you? Hm? Mmmm. And well you should not. For my ally in the Force. And a powerful ally it is.</p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img className="rounded-lg" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ferikkain%2Ffiles%2F2018%2F01%2FRey-Luke.jpg" alt="Syncing" />
                  </div>
                </div>
              </section>

              <div className={styles.section}>
                <div className="flex items-center sm:items-start justify-between mb-[15px]">
                  <div className="sm:text-[48px] text-[18px] text-white font-semibold leading-[0.8]">
                    Start earning today!
                  </div>
                </div>
                <div className="sm:text-[24px] font-medium text-[16px] text-white text-opacity-80">
                  Join the future of online content creation, sign up and start
                  earning today.
                </div>
              </div>
            </div>
          </Container>
        </div>
      </SharedLayout>
    </>

  );
};
export default About;
