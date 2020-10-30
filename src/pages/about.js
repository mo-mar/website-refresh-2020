import React from 'react'
import * as classes from './about.module.scss'
import headshot from '../assets/mohamed-omar-headshot-square-crop.jpg'
import Layout from '../components/Layout/Layout'
import { Helmet } from 'react-helmet'

export default function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mohamed Omar | Front-end developer</title>
        <link rel="canonical" href="http://thatmohamedomar.com" />
      </Helmet>
      <Layout headerText="About me">
        <div className={classes.container}>
          <div className="bio">
            <div className={classes.bioIntro}>
              <p>I'm Mohamed, or Mo, or محمد. </p>
              <p>
                I'm a front-end developer based in Toronto who, at the time of
                writing, still gets giddy when a line of code makes the computer
                or browser do something.
              </p>
              <p>
                (For example: That ... elaborate ... introduction on the home
                page? That brings me <em>endless joy.</em>)
              </p>
            </div>
            <div className={classes.bioBody}>
              <p>
                Before I caught web dev fever, I worked in journalism and online
                content creation. I got to talk to and write about all kinds of
                people doing all kinds of important, fascinating, hilarious,
                stupid and scary things. (I'll never forget the guy who{' '}
                <a
                  href="https://www.huffingtonpost.ca/2016/07/05/rick-nelson-bear-puncher_n_10820386.html"
                  rel="noopener noreferrer nofollow"
                  target=" _blank"
                >
                  punched a bear
                </a>
                . Good times.)
              </p>
              <p>
                I'm a graduate of HackerYou in Toronto (now called Juno College)
                and work with JavaScript primarily, both at work and for my side
                projects. I'm also a proud holder (receiver? recipient?) of a
                Bachelor of Journalism degree from Ryerson University, where I
                definitely attended classes and did not spend the majority of my
                time at the campus newspaper, The Eyeopener.
              </p>
            </div>
          </div>
          <div className={classes.headshot}>
            <img src={headshot} alt="Mohamed Omar photograph" />
          </div>
        </div>
      </Layout>
    </>
  )
}
