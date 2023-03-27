import Input from '@/components/common/inputs/input'
import PopoverButton from '@/components/common/popover'
import FacebookIcon from '@/components/svgs/facebook'
import LinkShareIcon from '@/components/svgs/link-share-icon'
import LinkedinIcon from '@/components/svgs/linkedin-icon'
import Share from '@/components/svgs/share/ShareIcon'
import TwitterIcon from '@/components/svgs/twitter'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import React, { useEffect, useState } from 'react'
import SharedLayout from '../../layout/shared-layout'
import ProductsCarousel from '../home/products-carousel'
import styles from '../privacy/index.module.css'
import { useRouter } from 'next/router'
import moment from "moment";
import markdownToHtml from './markdownToHtml'
import './index.module.css'
import { blogUrl } from "@/utils/blog";
import { toast } from 'react-hot-toast';
import { NextSeo } from 'next-seo'
import TotalUserCount from '@/components/TotalUserCount'

const BlogPost = ({ blogInfo, allBlogInfo }) => {
  const [data, setData] = useState({})
  const [blogData, setBlogData] = useState([])
  const router = useRouter();
  const id = router.query["id"];
  const [email, setEmail] = useState(null)

  const copyLinkToClipBoard = () => {
    navigator.clipboard.writeText(
      `https://blog-with-user.vercel.app/blog/${id}`
    );
    toast.success("Link copied");
  }

  const socialIcon = [
    {
      icon:
        <TwitterShareButton
          title={data?.title || ''}
          url={`https://blog-with-user.vercel.app/blog/${id}`}>
          <TwitterIcon width='21' height='17' color='#fff' />
        </TwitterShareButton>
    },
    {
      icon:
        <FacebookShareButton
          title={data?.title || ''}
          url={`https://blog-with-user.vercel.app/blog/${id}`}>
          <FacebookIcon width='21' height='21' color='#fff' textFill='#0E0125' />
        </FacebookShareButton>
    },
    {
      icon:
        <LinkedinShareButton
          title={data?.title || ''}
          url={`https://blog-with-user.vercel.app/blog/${id}`}>
          <LinkedinIcon />
        </LinkedinShareButton>
    },
    { icon: <LinkShareIcon onClick={copyLinkToClipBoard} /> }
  ]
  useEffect(() => {
    const asyncData = async () => {
      const data = (blogInfo && blogInfo[0]) || []
      let el = document.createElement('div');
      el.innerHTML = await markdownToHtml(data?.content || '')

      el.querySelectorAll('img').forEach((imgEL) => {
        if (imgEL?.src.includes('/images/')) {
          let splitData = imgEL.src.split('/')
          imgEL.src = `${blogUrl}/images/` + splitData[splitData.length - 1]
        }
      })
      data.content = el.innerHTML
      setData(data);
      setBlogData(allBlogInfo)
    }
    asyncData();
  }, [id, blogInfo, allBlogInfo])

  const SEO = {
    title: `Blog | ${data?.title}`,
    description: `${data?.description}`,
    openGraph: {
      title: `Blog | ${data?.title}`,
      description: `${data?.description}`,
      locale: 'en_IE',
      url: `https://beastbloger.com/`,
      site_name: 'Blogs',
      images: [
        {
          url: `${(`${blogUrl}/`).concat(data?.coverImage)}`,
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
      ],
    }
  }

  return (
    <>
      <NextSeo {...SEO} />
      <SharedLayout>
        <div className='fontInter px-4 max-w-[90rem] mx-auto'>
          <div className='lg:w-[830px] mx-auto text-center lg:pt-[88px] pt-12'>
            <h1 className='lg:text-5xl text-3xl lg:leading-[60px] font-semibold text-white'>{data?.title || ''}</h1>
            <p className='text-white/[0.7] text-xl px-10 pt-6'>{data?.description || ''}</p>
          </div>
          <div className='lg:mx-36 mt-16 lg:mb-24 mb-8'>
            <img src={`${data?.coverImage ? (data.coverImage).slice(0, 5) == "https" ? data?.coverImage : (`${blogUrl}/`).concat(data?.coverImage) : 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ferikkain%2Ffiles%2F2018%2F01%2FRey-Luke.jpg'}`} alt='blog' className='object-covor w-full' />
            <div className='flex justify-between  mt-8'>
              <div className='flex gap-x-16'>
                <div className='flex  flex-col gap-y-3'>
                  <p className={styles.gradientText}>Written by</p>
                  <p className='text-white/[0.5] text-lg font-medium'>{data?.author || ''}</p>
                </div>
                <div className='flex flex-col gap-y-3'>
                  <p className={styles.gradientText}>Published on</p>
                  <p className='text-white/[0.5] text-lg font-medium'>{moment(data?.publishedAt).format('D MMM YYYY')}</p>
                </div>
              </div>
              <PopoverButton display={<Share />} data={socialIcon} />
            </div>
          </div>
          <div className='lg:w-[720px] mx-auto text-white'>
            <article>
              <div
                className="blog-page prose lg:prose-xl text-white"
                dangerouslySetInnerHTML={{ __html: data?.content }}
              />
            </article>
          </div>
          <>
            <div className='lg:mx-36 mt-10 xxs:mt-48'>
              <div className='flex justify-between'>
                <h2 className='text-4xl font-semibold text-white'>Blogs</h2>
                <button className='lg:block hidden py-3 px-5 bg-[#6938EF] text-white rounded-xl text-base font-medium' onClick={() => router.push('/')}>View all</button>
              </div>
              <p className='text-xl font-normal mt-5 text-white/[0.85]'>Articles, tips, guides, industry best practices, and news.</p>
            </div>
            {/* <div className='lg:ml-36 lg:relative'>
            <div className="3xlg:absolute overflow-hidden pb-24 z-100 lg:pb-32 lg:pt-9 3xlg:max-w-[1364px] ">
              <ProductsCarousel blogData={blogData} />
            </div>
          </div> */}
          </>
          <div className='lg:px-24 lg:py-12 lg:my-24 grid grid-cols-11 lg:mx-28 p-4 bg-white/[0.05] rounded-2xl'>
            <div className='col-span-12 lg:col-span-7'>
              <p className='lg:text-5xl text-3xl font-semibold text-white mb-5'>Stay in the know</p>
              <p className='lg:text-2xl text-xl font-medium lg:pr-24 pb-2 text-white/[0.85]'>Get the latest news, resources, Creators and exclusive events straight to your inbox!</p>
            </div>

          </div>
        </div>
      </SharedLayout>

    </>


  )
}

export default BlogPost