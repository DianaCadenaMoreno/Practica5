import { useVideoTexture } from "@react-three/drei"
import { DoubleSide } from "three"
import { useRef,useEffect, useState } from "react"

export default function Video() {
    
    const [pause, setPause] = useState(false)
    
    const props = {
        unsuspend: 'canplay',
        muted: true,
        loop: true,
        start: pause
    }
    
    const videoTexture = useVideoTexture("./static/video.mp4", props)

    const playVideo = () =>{
        setPause(true)
    }

    return (
        <mesh receiveShadow position-y={ 4 } position-x={5} rotation-y={ Math.PI * 0.5 } onPointerUp={playVideo}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial map={videoTexture}  side={DoubleSide} />
        </mesh>
    )
}


