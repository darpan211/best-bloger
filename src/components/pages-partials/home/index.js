
import { useState, useEffect } from "react";
import SharedLayout from "../../layout/shared-layout";
import styles from "./index.module.css";
import { useWindowSize } from "@/utils/useWindowSize";
import { useRouter } from "next/router";
import { Container } from "@/components/components/Container";
import {
  animateUp,
} from "@/components/animation";
import { motion } from "framer-motion";
import TotalUserCount from "@/components/TotalUserCount";


const HomeUi = ({ allBlogInfo }) => {
  const router = useRouter();
  const windowSize = useWindowSize();
  const [earn, setEarn] = useState({ octopus: 0, other: 0 });
  const [followers, setFollowers] = useState(null);
  const [email, setEmail] = useState(null);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    setBlogData(allBlogInfo);
  }, [allBlogInfo]);

  const earningCalculation = () => {
    if (!followers || followers.includes("-")) {
      setEarn({ octopus: 0, other: 0 });
    } else {
      const percent = (followers * 5) / 100;
      const octopusEarn = Math.round(percent * 5.2);
      octopusEarn = new Intl.NumberFormat({
        maximumSignificantDigits: 3,
      }).format(octopusEarn);
      const otherEarn = Math.round(percent * 4);
      otherEarn = new Intl.NumberFormat({ maximumSignificantDigits: 3 }).format(
        otherEarn
      );
      setEarn({ octopus: octopusEarn, other: otherEarn });
    }
  };



  return (
    <SharedLayout title="home">
      <div className="fontInter text-center md:text-left">
        <Container>
          <>
            <div className="py-20 bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url(https://media.vanityfair.com/photos/5ce426151c0b0773cacd1121/master/pass/star-wars-feature-vf-2019-summer-embed-05.jpg)" }}>
              <div className="container m-auto text-center px-6 opacity-100">
                <h2 className="text-4xl font-bold mb-2 text-white">Echo Base...I've got something!</h2>
                <h3 className="text-2xl mb-8 text-gray-200">Not much, but it could be a life form. This is Rouge Two. this is Rouge Two. Captain Solo, so you copy?</h3>
                <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all">Commander Skywalker, do you copy?</button>
              </div>
            </div>
          </>
          <motion.div
            variants={animateUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 'some' }}
            className="z-30"
          >

            <section className="container mx-auto px-6 p-10">
              <div className="flex items-center flex-wrap mb-20">
                <div className="w-full md:w-1/2 md:pr-10">
                  <h4 className={`${styles.headingText} text-3xl font-bold mb-3`}>Oct</h4>
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
                  <h4 className={`${styles.headingText} text-3xl font-bold mb-3`}>Use the Force!</h4>
                  <p className="text-gray-200 mb-8">We'll never get it out now. So certain are you. Always with you it cannot be done. Hear you nothing that I say? Master, moving stones around is one thing. This is totally different. No! No different!</p>
                </div>
              </div>
              <div className="flex items-center flex-wrap mb-20">
                <div className="w-full md:w-1/2 md:pr-10">
                  <h4 className={`${styles.headingText} text-3xl font-bold mb-3`}>Life creates it</h4>
                  <p className="text-gray-200 mb-8">There is no try. I can't. It's too big. Size matters not. Look at me. Judge me by my size, do you? Hm? Mmmm. And well you should not. For my ally in the Force. And a powerful ally it is.</p>
                </div>
                <div className="w-full md:w-1/2">
                  <img className="rounded-lg" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ferikkain%2Ffiles%2F2018%2F01%2FRey-Luke.jpg" alt="Syncing" />
                </div>
              </div>
            </section>


          </motion.div>
          <motion.div
            variants={animateUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 'some' }}
            className="z-30"
          >
            <section className={`${styles.bgReview}`}>
              <div className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center text-gray-200 mb-8">Review for Blogs</h2>
                <div className="flex flex-wrap">

                  <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                    <div className="flex flex-col justify-between h-full bg-gray-200 rounded shadow py-2">
                      <p className="text-gray-800 text-base px-6 mb-5">How are you feeling, kid? You don't look so bad to me. In fact, you look strong enough to pull the ears off a Gundark. Thanks to you.</p>
                      <p className="text-gray-500 text-xs md:text-sm px-6">Luke Skywalker</p>
                    </div>
                  </div>

                  <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                    <div className="flex flex-col justify-between h-full bg-gray-200 rounded shadow py-2">
                      <p className="text-gray-800 text-base px-6 mb-5">That's two you owe me, junior. Well your Worship, looks like you managed to keep me around for a little while longer. I had nothing to do with it.</p>
                      <p className="text-gray-500 text-xs md:text-sm px-6">Emperor's Royal Guards</p>
                    </div>
                  </div>

                  <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                    <div className="flex flex-col justify-between h-full bg-white bg-gray-200 rounded shadow py-2">
                      <p className="text-gray-800 text-base px-6 mb-5">General Rieekan thinks it's dangerous for any ships to leave the system until we've activated the energy shield. That's a good story. I think you just can't bear to let a gorgeous guy like me out of your sight</p>
                      <p className="text-gray-500 text-xs md:text-sm px-6">Queen Mother Ta'a Chume</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </motion.div>
          <>
            <motion.div
              variants={animateUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 'some' }}
              className="z-30"
            >

              <section className="mt-7 bg-[#e0defa]">
                <div className="container mx-auto px-6 text-center py-20">
                  <h2 className="mb-6 text-4xl font-bold text-center text-[#0a0536]">Headquarters personnel</h2>
                  <h3 className="my-4 text-2xl text-gray-600">Report to command center. Take it easy.</h3>
                  <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-[#0a0536]">Report</button>
                </div>
              </section>
            </motion.div>
          </>
        </Container>
      </div>
    </SharedLayout>
  );
};

export default HomeUi;
