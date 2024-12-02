/*
Locket code auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'
import useSound from 'use-sound';
import openLocketSound from '../../../static/openLocket.mp3';
import closeLocketSound from '../../../static/closeLocket.mp3';

export function Locket(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/AnimatedLocket.glb')
  const { actions } = useAnimations(animations, group)
  const [ locketOpen, toggleLocket ] = useState(false)
  const [ playLocketOpenSound ] = useSound(openLocketSound);
  const [ playLocketCloseSound ] = useSound(closeLocketSound);

  const toggle = () => {
    const animation = actions!.LocketOpen!;
    if (locketOpen) {
      setTimeout(() => {
        playLocketCloseSound();
      }, 1400)
      animation.paused = false;
    } else {
      setTimeout(() => {
        playLocketOpenSound();
      }, 200)
      animation.reset();
    }
    animation.clampWhenFinished = true;
    animation.timeScale = locketOpen ? -1 : 1;
    animation.setLoop(THREE.LoopOnce, 1);
    animation?.play();
    toggleLocket(!locketOpen)
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Original_Mystery_Inc_Locket_v9">
        <group name="Armature" position={[0, 0, 0]}>
          <skinnedMesh
            name="Locket_Body003"
            geometry={nodes.Locket_Body003.geometry}
            material={materials['Gold.003']}
            skeleton={nodes.Locket_Body003.skeleton}
            onClick={toggle}
          />
          <primitive object={nodes.Bone} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/AnimatedLocket.glb')