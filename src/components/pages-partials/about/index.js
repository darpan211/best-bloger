import { Container } from "@/components/components/Container";
import TotalUserCount from "@/components/TotalUserCount";
import SharedLayout from "../../layout/shared-layout";
import styles from "./index.module.css";

const About = () => {
  return (
    <>
      <SharedLayout title="about" className="pt-20">
        <div className="">
          <Container className='md:px-8 px-6'>
            <div className="">
              <div className="mx-auto text-lg">
                <div className="flex items-center w-full justify-center px-4 flex-col">
                  <div className={styles.about}>About us</div>

                  <div className={`${styles.desc} `}>
                    Welcome to our blog! We're a team of passionate writers who love to share our knowledge and experiences with our readers.
                  </div>
                </div>
              </div>


              <section className="container mx-auto px-6 p-10 ">
                <div className="flex items-center flex-wrap mb-20">
                  <div className="w-full md:w-1/2 md:pr-10">
                    <h4 className={`${styles.descSecond} text-3xl font-bold mb-3`}>Our mission</h4>
                    <p className="text-gray-200 mb-8">Our mission is to provide high-quality, informative, and engaging content on a variety of topics, ranging from technology and science to lifestyle and entertainment. We believe that everyone deserves to have access to reliable information that can help them make better decisions and improve their lives.</p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img className="rounded-lg w-full" src="https://images.unsplash.com/photo-1638866411782-5f59287c19e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWlzc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Mission" />
                  </div>
                </div>
                <div className="flex items-center flex-wrap mb-20">
                  <div className="w-full md:w-1/2">
                    <img className="rounded-lg w-full" src="https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Team" />
                  </div>
                  <div className="w-full md:w-1/2 md:pl-10">
                    <h4 className={`${styles.descSecond} text-3xl font-bold mb-3`}>Our Team</h4>
                    <p className="text-gray-200 mb-8">Our team consists of experts in their respective fields who bring their unique perspectives and insights to our articles. We're committed to conducting thorough research and fact-checking to ensure the accuracy and credibility of our content.</p>
                  </div>
                </div>
                <div className="flex items-center flex-wrap mb-20">
                  <div className="w-full md:w-1/2 md:pr-10">
                    <h4 className={`${styles.descSecond} text-3xl font-bold mb-3`}>Stay up-to-date</h4>
                    <p className="text-gray-200 mb-8">Whether you're looking to learn something new, stay up-to-date with the latest trends, or simply enjoy some entertaining reads, we've got you covered. We also encourage our readers to share their thoughts and opinions in the comments section, as we believe that constructive discussions can enrich everyone's understanding of the topics we cover.</p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img className="rounded-lg w-full" src="https://images.unsplash.com/photo-1570872309681-828bdb21903c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RheSUyMHVwJTIwdG8lMjBkYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Syncing" />
                  </div>
                </div>
              </section>

              <div className={styles.section}>
                <div className="flex items-center sm:items-start justify-between mb-[15px]">
                  <div className="sm:text-[48px] text-[18px] text-white font-semibold leading-[0.8]">
                    Reach out to us!
                  </div>
                </div>
                <div className="sm:text-[24px] font-medium text-[16px] text-white text-opacity-80">
                  Thank you for visiting our blog, and we hope you enjoy reading our articles as much as we enjoy writing them. If you have any questions, feedback, or suggestions for future topics, please don't hesitate to reach out to us.
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
