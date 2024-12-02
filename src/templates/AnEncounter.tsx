import React from "react"

import '../css/mysterium/Mystery.css'

import * as THREE from 'three'
import { Canvas, useFrame, ThreeElements, useThree} from '@react-three/fiber'
import { Locket } from "../components/mystery/Locket"
import { Environment } from '@react-three/drei'
import { Overlay } from "../components/mystery/Overlay"
import { PlayProvider, usePlay } from "../context/Play"
import { easing } from 'maath';
import { Smoke } from "react-smoke";

// Added for Christmas '24
// Meant to mimic the Scooby Doo Mystery Incorporated vibe

const CameraZoom = () => {
  const zLimit = 15;
  const { isPlaying } = usePlay();

  useFrame((state, delta) => {
    if (isPlaying && state.camera.position.z > zLimit) {
      easing.damp3(state.camera.position, [0, 0, 15], 8, delta);
    }
  })
  return  <group/>
}

const EncounterScene = ({ pageContext }) => {
  const smokeColor = new THREE.Color("white");

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PlayProvider>
        <Canvas camera={{ position: [0, 0, 100], fov: 90}}>
          <color attach="background" args={[0, 0, 0]} />
          <ambientLight intensity={Math.PI / 2} />
          <CameraZoom />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Locket position={[0, -6, 0]} rotation={[Math.PI / 2, 0, 0]}/>
          <Environment preset="forest" />
          <Smoke
            color={smokeColor}
            density={100}
            enableRotation={true}
            rotation={[0, 0, 0.2]}
            minBounds={[-300, -200, -200]}
            maxBounds={[100, 200, 200]}
            size={[250, 250, 250]}
          />
          <fogExp2 attach="fog" color="black" density={0.02}/>
        </Canvas>
        <Overlay />
      </PlayProvider>
    </div>
  )
}

export default EncounterScene
