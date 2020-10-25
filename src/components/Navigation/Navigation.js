import React from 'react'
import { Link } from 'gatsby'
import * as classes from './navigation.module.scss'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/portfolio">Recent work</Link>
        </li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
