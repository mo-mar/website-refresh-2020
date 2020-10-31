import React from 'react'
import { Link } from 'gatsby'
import * as classes from './blog-posts-list.module.scss'
export default function BlogPostsList({ posts }) {
  return (
    <ul className={classes.container}>
      {posts.map(post => {
        return (
          <li key={post.node.id}>
            <Link className={classes.blogLink} to={post.node.fields.slug}>
              {post.node.frontmatter.title}
            </Link>
            <p className={classes.blogPublishDate}>
              Published: {post.node.frontmatter.date}
            </p>
          </li>
        )
      })}
    </ul>
  )
}
