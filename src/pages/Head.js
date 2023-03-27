import React from 'react'
import Head from 'next/head'
import data from '../../public/db.json';
function Heads() {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://firebasestorage.googleapis.com/v0/b/sharecode-84ab8.appspot.com/o/oct-logo.png?alt=media&token=c4c94729-f41d-45a2-8f6b-8723f9616903"
        />
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4843229773318635"
     crossorigin="anonymous"></script>
        <script
          async
          src={data?.script}
          crossorigin="anonymous"
        ></script>
      </Head>
    </>
  )
}

export default Heads
