import * as React from "react"

import { createContext, useContext, useState } from "react";

type PlayContextValue = {
    isPlaying: boolean,
    isDone: boolean,
    setIsPlaying: Function,
    setIsDone: Function,
}
  
export const PlayContext = createContext<PlayContextValue | null>({
    isPlaying: false,
    isDone: false,
    setIsPlaying: () => null,
    setIsDone: () => null,
})

PlayContext.displayName = 'PlayContext'

export const PlayProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDone, setIsDone] = useState(false);

  return (
    <PlayContext.Provider
      value={{
        isPlaying,
        isDone,
        setIsPlaying,
        setIsDone,
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};

export const usePlay = () => {
  const context = useContext(PlayContext);

  if (context === undefined) {
    throw new Error("usePlay must be used within a PlayProvider");
  }

  return context;
};