import React from 'react'
import Layout from '../components/Layout/Layout'
import * as classes from './contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from 'react-helmet'
export default function contact() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mohamed Omar | Front-end developer</title>
        <link rel="canonical" href="https://thatmohamedomar.com" />
      </Helmet>
      <Layout headerText="Contact me">
        <div className={classes.container}>
          <div className={classes.iconContainer}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>
              <a
                href="mailto:hello@thatmohamedomar.com"
                rel="noopener noreferrer nofollow"
                target=" _blank"
              >
                hello@thatmohamedomar.com
              </a>
            </span>
          </div>
          <div className={classes.iconContainer}>
            <FontAwesomeIcon icon={faTwitter} />
            <span>
              <a
                href="https://twitter.com/thatmohamedomar"
                rel="noopener noreferrer nofollow"
                target=" _blank"
              >
                @ThatMohamedOmar
              </a>
            </span>
          </div>
          <div className={classes.iconContainer}>
            <FontAwesomeIcon icon={faLinkedin} />
            <span>
              <a
                href="https://www.linkedin.com/in/mohamedomar2/"
                rel="noopener noreferrer nofollow"
                target=" _blank"
              >
                Linkedin.com/in/mohamedomar2
              </a>
              /
            </span>
          </div>
        </div>
      </Layout>
    </>
  )
}
