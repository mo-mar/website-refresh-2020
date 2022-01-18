import React from 'react'

import * as classes from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <p>Mohamed Omar © 2022</p>
      <div className={classes.icons}>
        <a
          href="https://twitter.com/ThatMohamedOmar"
          rel="noopener noreferrer nofollow"
          target=" _blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamedomar2/"
          rel="noopener noreferrer nofollow"
          target=" _blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/mo-mar"
          rel="noopener noreferrer nofollow"
          target=" _blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  )
}
