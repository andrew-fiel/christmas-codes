import {
    addDays,
    differenceInDays,
    formatISO,
    parseISO,
    startOfDay,
  } from 'date-fns'
  import { default as GraphemeSplitter } from 'grapheme-splitter'
  import queryString from 'query-string'
  
  import { ENABLE_ARCHIVED_GAMES } from '../constants/settings'
  import { NOT_CONTAINED_MESSAGE, WRONG_SPOT_MESSAGE } from '../constants/strings'
  import { VALID_GUESSES } from '../constants/validGuesses'
  import { WORDS } from '../constants/wordlist'
  import { getToday } from './dateutils'
  import { getGuessStatuses } from './statuses'
  
  // 1 January 2022 Game Epoch
  export const firstGameDate = new Date(2022, 0)
  export const periodInDays = 1
  
  export const isWordInWordList = (word: string) => {
    return (
      WORDS.includes(localeAwareLowerCase(word)) ||
      VALID_GUESSES.includes(localeAwareLowerCase(word))
    )
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