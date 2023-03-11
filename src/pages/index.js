

import Resource from "@/components/pages-partials/resources";
import React from "react";
import { fetchAllBlog, fetchAllCollection } from "@/pages/api/blog";

const Resources = ({ allBlogInfo, allCollectionInfo }) => {
  const allBlogData = JSON.parse(allBlogInfo);
  const allCollectionData = JSON.parse(allCollectionInfo);
  return <Resource allBlogInfo={allBlogData} allCollectionInfo={allCollectionData} />;
};

export default Resources;
export async function getServerSideProps(context) {
  const blogResponse = await fetchAllBlog();
  const collectionResponse = await fetchAllCollection();
  return {
    props: {
      allBlogInfo: JSON.stringify(blogResponse),
      allCollectionInfo: JSON.stringify(collectionResponse)
    },
  };
}
