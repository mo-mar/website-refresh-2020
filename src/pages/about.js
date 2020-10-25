import React from 'react'
import * as classes from './about.module.scss'
import headshot from '../assets/mohamed-omar-headshot-square-crop.jpg'
import Layout from '../components/Layout/Layout'

export default function About() {
  return (
    <Layout headerText="About me">
      <div className={classes.container}>
        <div className="bio">
          <div className={classes.bioIntro}>
            <h3>Hello!/!مرحبا </h3>
            <p>I'm Mohamed, or Mo, or محمد. </p>
            <p>
              I'm a front-end developer based in Toronto who, at the time of
              writing, still gets giddy when a line of code makes the computer
              or browser do something.
            </p>
          </div>
          <div className={classes.bioBody}>
            <p>
              Before I caught JavaScript fever, I worked in journalism and
              online content creation. I got to talk to and write about all
              kinds of people doing all kinds of important, fascinating,
              hilarious, stupid and scary things. (I'll never forget the guy who{' '}
              <a
                href="https://www.huffingtonpost.ca/2016/07/05/rick-nelson-bear-puncher_n_10820386.html"
                rel="noopener noreferrer nofollow"
                target=" _blank"
              >
                punched a bear
              </a>
              . Good times.)
            </p>
          </div>
        </div>
        <div className={classes.headshot}>
          <img src={headshot} alt="Mohamed Omar photograph" />
        </div>
      </div>
    </Layout>
  )
}
