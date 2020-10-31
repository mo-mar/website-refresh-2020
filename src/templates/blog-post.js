import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import { Helmet } from 'react-helmet'
import * as classes from './blog-post.module.scss'

export default function BlogPost({ data }) {
  console.log(data)
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mohamed Omar | {data.markdownRemark.frontmatter.title}</title>
        <link rel="canonical" href="https://thatmohamedomar.com/blog" />
      </Helmet>
      <Layout headerText="The Blog">
        <div className={classes.container}>
          <h2>{data.markdownRemark.frontmatter.title}</h2>
          <h3>{data.markdownRemark.frontmatter.date}</h3>
          <div
            className={classes.postBody}
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
        </div>
      </Layout>
    </>
  )
}

export const data = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
