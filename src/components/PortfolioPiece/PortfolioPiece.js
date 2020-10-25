import React from 'react'
import * as classes from './portfoliopiece.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
export default function PortfolioPiece({ portfolioPieceData }) {
  return (
    <div className={classes.container}>
      <div className={classes.portfolioBody}>
        <h3>{portfolioPieceData.name}</h3>
        <div className={classes.imageContainer}>
          <a
            href={portfolioPieceData.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            target=" _blank"
          >
            <img
              src={portfolioPieceData.image}
              alt="A screengrab of a web app called Who's My Rep?, built by Mohamed Omar."
            />
          </a>
        </div>
        <p>{portfolioPieceData.description}</p>
      </div>
      <a
        href={portfolioPieceData.githubLink}
        rel="noopener noreferrer nofollow"
        target=" _blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  )
}
