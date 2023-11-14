const gameStateKey = 'gameState'

export type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToSessionStorage = (
  gameState: StoredGameState
) => {
  sessionStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromSessionStorage = () => {
  const state = sessionStorage.getItem(gameStateKey)
  return state ? (JSON.parse(state) as StoredGameState) : null
}

export const clearGameStateFromSessionStorage = () => {
    sessionStorage.removeItem(gameStateKey)
}