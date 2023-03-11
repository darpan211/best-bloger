import React, { useEffect, useRef, useState } from "react";
import Input from "@/components/common/inputs/input";
import { firebaseSubscribeToNewsLetter } from "@/firebase/utils";
import SharedLayout from "../../layout/shared-layout";
import Card from "./cards/ResourceCard";
import styles from "./index.module.css";
import Pagination from "@/components/common/pagination/resourcePagination";

const Resource = ({ allBlogInfo, allCollectionInfo }) => {
  const isFirefox = typeof InstallTrigger !== "undefined";
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(9);
  const [pageData, setPageData] = useState([]);
  const [email, setEmail] = useState(null);
  const [allData, setAllData] = useState([]);
  const [collection, setCollection] = useState([]);
  const pageTopRef = useRef(null);
  const emailSubscription = async () => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (email && email.length > 0 && email.match(isValidEmail)) {
      console.log(email);
      await firebaseSubscribeToNewsLetter(email);
      alert("Subscriber add successfully")
      setEmail("");
    } else {
      alert("Enter valid Email")
    }
  };

  useEffect(() => {
    setCollection(allCollectionInfo)
  }, [allCollectionInfo])

  useEffect(() => {
    const slicedArray = (allBlogInfo || []).slice(0, itemPerPage);
    setPageData(slicedArray);
    setData(allBlogInfo);
    setAllData(allBlogInfo);
  }, [allBlogInfo]);



  console.log("collection", collection);

  const onChange = (e) => {

    setData(allBlogInfo)
    setPageData(allBlogInfo)

    if (e.target.value !== 'All') {
      const filterData = (allData || []).filter(item => item.collection.toLowerCase().includes((e.target.value).toLowerCase()))
      setData(filterData)
      setPageData(filterData)
      if (filterData.length === 0) {

      }
    } else {
      setData(allBlogInfo)
      const newOffset = (0) * itemPerPage;
      setPageData(allBlogInfo.slice(newOffset, newOffset + itemPerPage))
    }
  }


  const handlePageChange = (pageNumber = 1) => {
    const newOffset = (pageNumber - 1) * itemPerPage;
    const slicedArray = data.slice(newOffset, newOffset + itemPerPage);
    setPageData(slicedArray);
    setActivePage(pageNumber);
    pageTopRef.current.scrollIntoView();
  };
  return (
    <SharedLayout title="Blogs" className="mt-10">
      <div className="fontInter" ref={pageTopRef}>
        <div className="container-main xs:px-8 px-1">
          <div className={styles.headingText}>
            <h1>Blogs</h1>
          </div>
          <p className="text-gray-300 text-[20px] mt-3 md:block hidden text-center">
            Articles, tips, guides, industry best practices, and news.
          </p>
          <div className="flex justify-center mt-5">

            <select
              id="message-type"
              name="message-type"
              className=" right-0 z-10 mt-1 md:w-[500px] w-[80%] origin-top-right bg-transparent rounded-md  shadow-lg ring-1 focus:ring-gray-900 ring-gray-600 text-gray-300  focus:border-gray-300 outline-none focus:outline-none"
              onChange={(e) => { onChange(e) }}
            >
              {collection && collection.map((coll) => {
                return (
                  <option className="text-gray-300  bg-[#0E0125] border-none outline-none  block px-4 py-2 text-sm cursor-pointer" value={coll.collection}>{coll.collection}</option>
                )
              })}
            </select>
          </div>


          <div>
            <div
              className={`grid gap-4 mx-auto px-4 mt-10 ${isFirefox ? "lg:gap-8" : "lg:gap-4"
                } md:gap-6 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 sm:grid-rows-9 md:grid-row-5 lg:grid-rows-auto`}
            >
              {(pageData || [])?.map((content, i) => (
                <Card key={i} data={content} classes={"mx-auto"} />
              ))}
            </div>
            {data.length > itemPerPage && (
              <div className={""}>
                <Pagination
                  activePage={activePage}
                  handlePageChange={handlePageChange}
                  projectList={data}
                  itemPerPage={itemPerPage}
                />
              </div>
            )}
          </div>
          <div className="fontInter mx-auto bg-white/[0.05] rounded-lg mt-14">
            <div className="lg:px-[96px] lg:py-[48px] md:px-8 md:py-5 p-2 lg:flex justify-between flex-row  ">
              <div>
                <p className="md:text-[48px] text-3xl mb-5 text-white">
                  Stay in the Know
                </p>
                <p className="text-white/[0.5]">
                  Get the latest news, blogs, Creators and <br /> exclusive
                  events straight to your inbox!
                </p>
              </div>
              <div className="flex items-center pt-5">
                <Input
                  classes={"w-[270px] h-[44px] px-2"}
                  placeholder={"Enter your email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={emailSubscription}
                  className="bg-[#6938EF] text-white py-2 px-4 rounded-lg ml-4"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SharedLayout>
  );
};

export default Resource;
