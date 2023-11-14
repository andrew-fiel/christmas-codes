import * as React from "react"

import {
  END_TITLE,
  END_DESCRIPTION
} from '../../../constants/strings'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  rewardLink: string
}

export const EndModal = ({
  isOpen,
  handleClose,
  rewardLink,
}: Props) => {
  return (
    <BaseModal
    title={END_TITLE}
    isOpen={isOpen}
    handleClose={handleClose}
    >
    <div className="mb-1 mt-4 flex justify-center">
      <a
        href={rewardLink}
      >
        <button className='xxshort:h-6 xxshort:w-8 xxshort:text-xxs xshort:w-12 xshort:h-9 flex short:h-9 short:w-12 h-12 w-16 items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none bg-green-500 hover:bg-green-600 active:bg-green-700 text-white'>
          Reward
        </button>
      </a>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {END_DESCRIPTION}
      </p>
    </BaseModal>
  )
}