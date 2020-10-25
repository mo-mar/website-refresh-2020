import React from 'react'
import Layout from '../components/Layout/Layout'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mohamed Omar | Front-end developer</title>
        <link rel="canonical" href="http://thatmohamedomar.com" />
      </Helmet>
      <Layout headerText="Mohamed Omar" letterColour="#2f6cb1">
        <p>What a world.</p>

        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </Layout>
    </>
  )
}
