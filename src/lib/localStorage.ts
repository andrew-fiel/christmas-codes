const gameStateKey = 'gameState'

export type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToSessionStorage = (
  gameState: StoredGameState
) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(gameStateKey, JSON.stringify(gameState))
  }
}

export const loadGameStateFromSessionStorage = () => {
  let state;
  if (typeof window !== 'undefined') {
    state = window.sessionStorage.getItem(gameStateKey)
  }
  return state ? (JSON.parse(state) as StoredGameState) : null
}

export const clearGameStateFromSessionStorage = () => {
  typeof window !== 'undefined' && window.sessionStorage.removeItem(gameStateKey)
}
