import React from 'react'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import * as classes from './layout.module.scss'

export default function Layout(props) {
  return (
    <div className={classes.container}>
      <header>
        <Header headerText={props.headerText} />
        <Navigation />
      </header>
      <div className={classes.body}>{props.children}</div>
      <footer className={classes.footer}>
        <p>Mohamed Omar 2020</p>
      </footer>
    </div>
  )
}
