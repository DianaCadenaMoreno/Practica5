// import { Suspense } from 'react'
// import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'

// export default function Video() {
//   const size = useAspect(1800, 1000)
//   return (
//     <mesh scale={size}>
//       <planeGeometry />
//       <Suspense fallback={<FallbackMaterial url="/static/wall.jpg" />}>
//         <VideoMaterial url="/static/video.mp4" />
//       </Suspense>
//     </mesh>
//   )
// }

// function VideoMaterial({ url }) {
//   const texture = useVideoTexture(url)
//   return <meshBasicMaterial map={texture} toneMapped={false} />
// }

// function FallbackMaterial({ url }) {
//   const texture = useTexture(url)
//   return <meshBasicMaterial map={texture} toneMapped={false} />
// }


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


