import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Imagen from './models/Imagen'
import Video from './models/Video'
import Foco from './models/Foco'
import { PointLightHelper } from 'three'
import { useRef } from 'react'
import { useHelper } from '@react-three/drei'

export default function Experience() {
    const pointLightRef = useRef()

    useHelper(pointLightRef, PointLightHelper, 1)
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        {/* <directionalLight castShadow={true} position={[6,4,-4]} intensity={1.5} /> */}
        <pointLight ref={pointLightRef} castShadow={true} position={[4, 6, -8]} intensity={4.5}/>
        <ambientLight intensity={0.5} />
        <Sky /> 
        <Foco />
        <Video />
        <Imagen />
        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color={0x2D0429} />
        </mesh>
    </>
}