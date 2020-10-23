import React from 'react'
import { Link } from 'gatsby'
import * as classes from './navigation.module.scss'

export default function Navigation() {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About me</Link>
      </li>
      <li>Recent work</li>
      <li>Blog</li>
      <li>Contact</li>
    </nav>
  )
}
