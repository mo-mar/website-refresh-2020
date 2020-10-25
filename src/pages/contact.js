import React from 'react'
import Layout from '../components/Layout/Layout'
import { Helmet } from 'react-helmet'
export default function contact() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mohamed Omar | Front-end developer</title>
        <link rel="canonical" href="http://thatmohamedomar.com" />
      </Helmet>
      <Layout headerText="Contact">
        <div>Hello, contact me</div>
      </Layout>
    </>
  )
}
