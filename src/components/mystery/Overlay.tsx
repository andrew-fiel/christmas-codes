import React from "react";

import '../../css/mysterium/Mystery.css'

import { useProgress } from "@react-three/drei";
import { usePlay } from "../../context/Play";
import useSound from 'use-sound';
import introSpeech from '../../../static/MrEIntro.mp3';
import PlayIcon from '@heroicons/react/24/solid/PlayIcon'

export const Overlay = () => {
  const { progress } = useProgress();
  const { isPlaying, setIsPlaying } = usePlay();
  const [playSound] = useSound(introSpeech);

  const play = () => {
    setIsPlaying(true);
    playSound();
  }

  return (
    <div className={`overlay ${isPlaying ? "unclickable" : ""}`}>
      {progress === 100 && (
        <div className={`intro ${isPlaying ? "intro--disappear" : ""}`}>
          <PlayIcon
            className={"explore"}
            onClick={play}
          />
        </div>
      )}
    </div>
  );
};