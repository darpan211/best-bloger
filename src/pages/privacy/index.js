import PrivacyMain from "@/components/pages-partials/privacy"
import { NextSeo } from "next-seo"

export default function Privacy() {
  return (
    <>
        <NextSeo
        title="Blogs"
        description="Welcome to Blogs, your go-to source for Topics. Our team of expert writers share informative and engaging articles on AI, games, Machine Learning, providing you with the latest news, tips, and insights to help you Achieve Specific Goals Join our community today and stay informed on all things."
        openGraph={{
          title: 'Blogs',
          description: 'Welcome to Blogs, your go-to source for Topics. Our team of expert writers share informative and engaging articles on AI, games, Machine Learning, providing you with the latest news, tips, and insights to help you Achieve Specific Goals Join our community today and stay informed on all things.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
              alt: 'Og Image Alt',
              width: 800,
              height: 600
            },
          ],
        }}
      />
      <PrivacyMain />
    </>
   
  )
}
