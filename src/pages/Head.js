import React from 'react'
import Head from 'next/head'
import data from '../../public/db.json';
console.log(data, "data==========");
function Heads() {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://firebasestorage.googleapis.com/v0/b/sharecode-84ab8.appspot.com/o/oct-logo.png?alt=media&token=c4c94729-f41d-45a2-8f6b-8723f9616903"
        />
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
