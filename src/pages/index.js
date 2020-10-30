import React from 'react'
import Layout from '../components/Layout/Layout'
import { Helmet } from 'react-helmet'
import * as classes from './index.module.scss'
import TypewriterComponent from '../components/Typewriter/TypewriterComponent'
export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mohamed Omar | Front-end developer</title>
        <link rel="canonical" href="http://thatmohamedomar.com" />
      </Helmet>
      <Layout headerText="Mohamed Omar" letterColour="#599684">
        <div className={classes.container}>
          <TypewriterComponent />
        </div>
      </Layout>
    </>
  )
}
