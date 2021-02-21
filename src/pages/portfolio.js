import React from 'react'
import Layout from '../components/Layout/Layout'
import { Helmet } from 'react-helmet'
import * as classes from './portfolio.module.scss'
import whosMyRepImage from '../assets/whos-my-rep-screenshot.png'
import kanbanBoardImage from '../assets/kanban-board.png'
import myWebsiteImage from '../assets/website-screenshot.png'
import weatherAppImage from '../assets/weather-app.png'
import PortfolioPiece from '../components/PortfolioPiece/PortfolioPiece'

const whosMyRep = {
  name: `Who's My Rep?`,
  link: 'https://whos-my-rep.netlify.app/',
  image: whosMyRepImage,
  description: `A single-page app that connects Canadians with their municipal, provincial and federal political representatives. Built with React.`,
  githubLink: 'https://github.com/mo-mar/whos-my-rep-v2',
}

const kanbanBoard = {
  name: 'Kanban Board',
  link: 'https://the-kanban-board.netlify.app/',
  image: kanbanBoardImage,
  description:
    'A simple Kanban Board built with React and React Beautiful DnD.',
  githubLink: 'https://github.com/mo-mar/kanban-board',
}

const weatherApp = {
  name: 'My Generic Weather App',
  link: 'https://mo-mar.github.io/weather-app/',
  image: weatherAppImage,
  description: `It's a weather app. Does it reinvent the wheel? No. Was it a great way to practice React hooks? You betcha.`,
  githubLink: 'https://github.com/mo-mar/weather-app',
}

const myWebsite = {
  name: 'This very website',
  link: null,
  image: myWebsiteImage,
  description: `My personal website and blog were built with Gatsby.js, SASS and CSS modules, which is a bit of an upgrade from the plain HTML page I made last year!`,
  githubLink: 'https://github.com/mo-mar/website-refresh-2020',
}

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mohamed Omar | Front-end developer</title>
        <link rel="canonical" href="https://thatmohamedomar.com" />
      </Helmet>
      <Layout headerText="Recent work">
        <div className={classes.intro}>
          <p>
            I do my best to frequently build new apps and websites to learn new
            technologies and keep my tools sharp.{' '}
          </p>
          <p>
            Some of them will land here, some of them won't. They can't all be
            bangers.
          </p>
          <p>
            Feel free to check out my GitHub profile if you want{' '}
            <a
              href="https://github.com/mo-mar"
              rel="noopener noreferrer nofollow"
              target=" _blank"
            >
              a peek
            </a>{' '}
            behind the curtain (and promise you won't judge all the abandoned
            repos.)
          </p>
        </div>
        <div className={classes.portfolioGrid}>
          <PortfolioPiece portfolioPieceData={whosMyRep} />
          <PortfolioPiece portfolioPieceData={kanbanBoard} />
          <PortfolioPiece portfolioPieceData={weatherApp} />
          <PortfolioPiece portfolioPieceData={myWebsite} />
        </div>
      </Layout>
    </>
  )
}
