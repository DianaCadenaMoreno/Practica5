import * as THREE from 'three'
import React, { useState } from 'react'

export default function Imagen(){
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/static/imagen1.jpg');
    const [currentTexture, setCurrentTexture] = useState(texture)

    const handleClick = () => {
        const newTexture = textureLoader.load('/static/imagen2.jpg');
        setCurrentTexture(newTexture);
    };
    return (
        <mesh position-y={4} position-z={-5} rotation-y={-Math.PI * 2} scale={10} onPointerUp={handleClick}>
            <planeGeometry />
            <meshStandardMaterial map={currentTexture} />
        </mesh>   
    );
}
