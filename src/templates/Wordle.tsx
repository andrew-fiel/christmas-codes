import React from "react"

import Game from "../components/wordle/Game"
import { AlertProvider } from '../context/AlertContext'

const Wordle = ({ pageContext }) => {
  return (
    <AlertProvider>
      <Game
        destination={pageContext.destination}
        word={pageContext.word}
        player={pageContext.player}
      />
    </AlertProvider>
  )
}

export default Wordle
