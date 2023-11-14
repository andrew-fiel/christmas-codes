import * as React from "react"

import Game from "../components/wordle/Game"
import Seo from "../components/seo"
import { AlertProvider } from '../context/AlertContext'

const JillsCard1 = () => (
  <AlertProvider>
    <Game
      link={'https://support.apple.com/en-us/HT201209'}
      solution={'BUTTS'}
    />
  </AlertProvider>
)

export const Head = () => <Seo title="Test" />

export default JillsCard1
