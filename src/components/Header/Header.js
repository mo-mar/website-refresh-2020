import React from 'react'
import Navigation from '../Navigation/Navigation'

import * as classes from './header.module.scss'
export default function Header(props) {
  let splitWords = props.headerText.split(' ')
  let firstWord = splitWords[0]
  let firstWordCharacter = firstWord[0]
  let restOfFirstWord = firstWord.replace(firstWord[0], '')
  let secondWord = splitWords.length > 1 ? splitWords[1] : null
  let secondWordCharacter
  let restOfSecondWord
  if (secondWord) {
    secondWordCharacter = secondWord[0]
    restOfSecondWord = secondWord.replace(secondWord[0], '')
  }

  return (
    <header className={classes.header}>
      <h1>
        <span style={{ color: `${props.letterColour}` }}>
          {firstWordCharacter}
        </span>
        <span>{restOfFirstWord}</span>
        <br></br>
        <span style={{ color: `${props.letterColour}` }}>
          {secondWordCharacter}
        </span>
        <span>{restOfSecondWord}</span>
      </h1>
      <Navigation />
    </header>
  )
}
