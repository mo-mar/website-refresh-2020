import React from 'react'
import * as classes from './portfoliopiece.module.scss'

export default function PortfolioPiece({ portfolioPieceData }) {
  return (
    <div className={classes.container}>
      <h3>{portfolioPieceData.name}</h3>
      <div className={classes.imageContainer}>
        <a href={portfolioPieceData.link} target="_blank">
          <img
            src={portfolioPieceData.image}
            alt="A screengrab of a web app called Who's My Rep?, built by Mohamed Omar."
          />
        </a>
      </div>
      <p>{portfolioPieceData.description}</p>

      <p>github link</p>
      <p>live website link...</p>
    </div>
  )
}
