import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon'
import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon'

import * as React from "react"

import {
  useState,
} from 'react'

import { GAME_TITLE } from '../../../constants/strings'
import { SPIN_STOP_TIME_MS } from '../../../constants/settings'

type Props = {
setIsInfoModalOpen: (value: boolean) => void
resetGame: () => void
}



export const Navbar = ({
setIsInfoModalOpen,
resetGame
}: Props) => {
  const [isSpinning, setIsSpinning] = useState(false)

  const tryReset = () => {
    if (!isSpinning) {
      resetGame()
      setIsSpinning(true)
      setTimeout(() => {
        setIsSpinning(false)
      }, SPIN_STOP_TIME_MS)
    }
  }

return (
    <div className="navbar">
    <div className="navbar-content px-5 short:h-auto">
        <div className="flex">
        <InformationCircleIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
        />
        </div>
        <p className="text-xl font-bold dark:text-white">{GAME_TITLE}</p>
        <div className="right-icons">
        <ArrowPathIcon
            className={"h-6 w-6 cursor-pointer dark:stroke-white" + (isSpinning ? ' spinning' : '')}
            onClick={() => tryReset()}
        />
        </div>
    </div>
    <hr></hr>
    </div>
)
}