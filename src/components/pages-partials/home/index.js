
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
import Link from 'next/link'


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
            <div className="py-20 bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)" }}>
              <div className="container m-auto text-center px-6 opacity-100">
                <h2 className="text-4xl font-bold mb-2 text-white"> Welcome to My Blog</h2>
                <h3 className="text-2xl mb-8 text-gray-200">This is a place where I share my thoughts and ideas about various topics.</h3>
                <Link href="/"><button className="bg-pink-500 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all"> Check out my latest posts</button></Link>
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
                  <h4 className={`${styles.headingText} text-3xl font-bold mb-3`}>Our mission</h4>
                  <p className="text-gray-200 mb-8">Our mission is to provide high-quality, informative, and engaging content on a variety of topics, ranging from technology and science to lifestyle and entertainment. We believe that everyone deserves to have access to reliable information that can help them make better decisions and improve their lives.</p>
                </div>
                <div className="w-full md:w-1/2">
                  <img className="rounded-lg" src="https://images.unsplash.com/photo-1638866411782-5f59287c19e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWlzc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Mission" />
                </div>
              </div>
              <div className="flex items-center flex-wrap mb-20">
                <div className="w-full md:w-1/2">
                  <img className="rounded-lg" src="https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Team" />
                </div>
                <div className="w-full md:w-1/2 md:pl-10">
                  <h4 className={`${styles.headingText} text-3xl font-bold mb-3`}>Our Team</h4>
                  <p className="text-gray-200 mb-8">Our team consists of experts in their respective fields who bring their unique perspectives and insights to our articles. We're committed to conducting thorough research and fact-checking to ensure the accuracy and credibility of our content.</p>
                </div>
              </div>
              <div className="flex items-center flex-wrap mb-20">
                <div className="w-full md:w-1/2 md:pr-10">
                  <h4 className={`${styles.headingText} text-3xl font-bold mb-3`}>Stay up-to-date</h4>
                  <p className="text-gray-200 mb-8">Whether you're looking to learn something new, stay up-to-date with the latest trends, or simply enjoy some entertaining reads, we've got you covered. We also encourage our readers to share their thoughts and opinions in the comments section, as we believe that constructive discussions can enrich everyone's understanding of the topics we cover.</p>
                </div>
                <div className="w-full md:w-1/2">
                  <img className="rounded-lg" src="https://images.unsplash.com/photo-1570872309681-828bdb21903c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RheSUyMHVwJTIwdG8lMjBkYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Syncing" />
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
                  <h2 className="mb-6 text-4xl font-bold text-center text-[#0a0536]">About Me</h2>
                  <h3 className="my-4 text-2xl text-gray-600">Hi, my name is Jane and I'm a blogger who loves to write about technology and culture. I hope you enjoy my blog!</h3>
                  <Link href={"/contact"}><button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-[#0a0536]">Contact us</button></Link>
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
