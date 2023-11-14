const gameStateKey = 'gameState'

export type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToSessionStorage = (
  gameState: StoredGameState
) => {
  if (sessionStorage) {
    sessionStorage.setItem(gameStateKey, JSON.stringify(gameState))
  }
}

export const loadGameStateFromSessionStorage = () => {
  let state;
  if (sessionStorage) {
  state = sessionStorage.getItem(gameStateKey)
  }
  return state ? (JSON.parse(state) as StoredGameState) : null
}

export const clearGameStateFromSessionStorage = () => {
  if (sessionStorage) {
    sessionStorage.removeItem(gameStateKey)
  }
}