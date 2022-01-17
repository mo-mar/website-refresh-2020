import React from 'react'
import Layout from '../components/Layout/Layout'
import { graphql } from 'gatsby'
import BlogPostsList from '../components/BlogPostsList/BlogPostsList'
import { Helmet } from 'react-helmet'

export default function BlogPage({ data }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mohamed Omar | Front-end developer</title>
        <link rel="canonical" href="https://thatmohamedomar.com" />
      </Helmet>
      <Layout headerText="The Blog">
        <h2>Latest Posts</h2>
        <BlogPostsList posts={data.allMarkdownRemark.edges} />
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date, frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
          id
        }
      }
    }
  }
`
