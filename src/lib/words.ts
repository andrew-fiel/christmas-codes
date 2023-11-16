import { default as GraphemeSplitter } from 'grapheme-splitter'

import { VALID_GUESSES_5 } from '../constants/validGuesses5'
import { VALID_GUESSES_7 } from '../constants/validGuesses7'

export const isWordInWordList = (word: string) => {
  const lower = localeAwareLowerCase(word)
  return word.length == 5 ? VALID_GUESSES_5.includes(lower) : VALID_GUESSES_7.includes(lower)
}

export const isWinningWord = (word: string, solution: string) => {
  return solution === word
}

export const unicodeSplit = (word: string) => {
  return new GraphemeSplitter().splitGraphemes(word)
}

export const unicodeLength = (word: string) => {
  return unicodeSplit(word).length
}

export const localeAwareLowerCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleLowerCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toLowerCase()
}

export const localeAwareUpperCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleUpperCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toUpperCase()
}