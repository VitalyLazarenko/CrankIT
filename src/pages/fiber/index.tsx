import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import { BoxComponent } from '../../components/webGL.component/Box.component'
import { LightComponent } from '../../components/webGL.component/Light.component'
import { CameraController } from '../../components/webGL.component/Camera.component'

const Box = (  ) => {
  return (
    <>
      <Head>
        <title>Fiber</title>
      </Head>
      <Canvas>
        <CameraController/>
        <LightComponent/>
        <BoxComponent position={ [ 0, 0, 0 ] } name={ '12' }/>
      </Canvas>
    </>
  )
}

export default Box
