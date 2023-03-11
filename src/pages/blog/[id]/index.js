import BlogPost from '@/components/pages-partials/blog'
import React from 'react'
import { fetchAllBlog, fetchBlogBySlug, fetchAllCollection } from "@/pages/api/blog";

const Blog = ({ blogInfo, allBlogInfo, allCollectionInfo }) => {
  const blogData = JSON.parse(blogInfo || []);
  const allBlogData = JSON.parse(allBlogInfo || []);
  const allCollectionData = JSON.parse(allCollectionInfo || []);

  return (
    <BlogPost blogInfo={blogData} allBlogInfo={allBlogData} allCollectionInfo={allCollectionData} />
  )
}
export default Blog
export async function getServerSideProps(context) {
  const params = context.params.id
  const blogResponse = await fetchBlogBySlug(params)
  const allBlogResponse = await fetchAllBlog()
  const allCollectionResponse = await fetchAllCollection()

  return {
    props: {
      "blogInfo": JSON.stringify(blogResponse) || [],
      "allBlogInfo": JSON.stringify(allBlogResponse),
      "allCollectionInfo": JSON.stringify(allCollectionResponse)
    }
  }
}
