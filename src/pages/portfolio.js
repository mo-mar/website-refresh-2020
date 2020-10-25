import React from 'react'
import Layout from '../components/Layout/Layout'
import * as classes from './portfolio.module.scss'
import PortfolioPiece from '../components/PortfolioPiece/PortfolioPiece'

const whosMyRep = {
  name: `Who's My Rep?`,
  link: 'https://mo-mar.github.io/mohamedOmarProjectFive/',
  image: '../../assets/whos-my-rep-screenshot.png',
  description: `A single-page app that connects Canadians with their municipal, provincial and federal political representatives. All data pulled in from the Open North API.`,
  githubLink: 'https://github.com/mo-mar/mohamedOmarProjectFive',
}

export default function Portfolio() {
  return (
    <Layout headerText="Recent work">
      <p>
        I try to build as many apps and websites as I can to sharpen my skills
        and learn new technologies, no matter how silly or simple they may seem
        on the surface. From a weather app that taught me the power of React's
        useEffect hook or a Kanban board that showed me how awesome Styled
        Components can be, this little collection of my recent work is a good
        sample of what I've been up to lately.
      </p>
      <div className={classes.portfolioGrid}>
        <PortfolioPiece portfolioPieceData={whosMyRep} />
        <PortfolioPiece portfolioPieceData={whosMyRep} />
        <PortfolioPiece portfolioPieceData={whosMyRep} />
        <PortfolioPiece portfolioPieceData={whosMyRep} />
      </div>
    </Layout>
  )
}
