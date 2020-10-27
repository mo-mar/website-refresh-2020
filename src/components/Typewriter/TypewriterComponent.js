import React, { useRef, useEffect } from 'react'
import Typewriter from 'typewriter-effect/dist/core'
import * as classes from './typewritercomponent.module.scss'
let strings = [
  'Hello!/!مرحبا',
  `I'm Mohamed`,
  `I'm a front-end developer`,
  'I live in Toronto',
  'JavaScript blows my mind frequently',
  'Hmm … what else',
  'I really like Radiohead',
  'And gadgets',
  'Like very expensive cameras',
  'That I will never own',
  'I’m a middle child',
  'I’ve been told middle children seek attention',
  'Is this true?',
  'Oh God',
  'Am I seeking attention right now?',
  'Wait, why are you still here?',
  'I mean, don’t get me wrong',
  'I’m flattered',
  'You’re a welcome guest here',
  'I just didn’t expect to-',
  'Oh, where are my manners?',
  'How are you doing?',
  'Deb and the kids doing well?',
  'Can you imagine if you actually knew a Deb?',
  'Or if YOUR NAME WAS DEB?',
  'I know, I know. The odds of this happening are extremely low',
  'But a man can dream',
  'OK, this has gone off the rails',
  'Let me try this again',
]
export default function TypewriterComponent() {
  const typewriterRef = useRef(null)
  useEffect(() => {
    var typewriter = new Typewriter(typewriterRef.current, {
      strings,
      loop: true,
      delay: 60,
      deleteSpeed: 40,
      autoStart: true,
    })

    typewriter.start()
  }, [])

  return <div className={classes.container} ref={typewriterRef}></div>
}
