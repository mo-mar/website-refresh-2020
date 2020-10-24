import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as classes from './layout.module.scss'

export default function Layout(props) {
  return (
    <div className={classes.container}>
      <Header
        headerText={props.headerText}
        letterColour={props.letterColour}
      ></Header>
      <div className={classes.body}>{props.children}</div>
      <Footer />
    </div>
  )
}
