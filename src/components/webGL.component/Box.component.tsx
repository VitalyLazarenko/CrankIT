import * as THREE from 'three'
import cookiesTexture from './texture/cookie.png'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

interface IProps {
  position: THREE.Vector3Tuple,
  name: string,
}

export const BoxComponent: React.FC<IProps> = ( props ) => {

  const texture = new THREE.TextureLoader().load(cookiesTexture.src)

  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [ hovered, hover ] = useState(false)
  const [ clicked, click ] = useState(false)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // @ts-ignore TODO have a problem with syntax, need fis this
  useFrame(( state, delta ) => ( ref.current.rotation.x += 0.01 ))
  // Return the view, these are regular Threejs elements expressed in JSX

  const handleClick = () => {
    click(!clicked)
  }

  return (
    <mesh
      { ...props }
      ref={ ref }
      scale={ clicked ? 1.5 : 1 }
      onClick={ ( event ) => handleClick() }
      onPointerOver={ ( event ) => hover(true) }
      onPointerOut={ ( event ) => hover(false) }
    >
      <boxGeometry args={ [ 1, 1, 1 ] }/>
      <meshStandardMaterial
        color={ hovered ? 'orange' : 'white' }
        map={ texture }
      />
    </mesh>
  )
}