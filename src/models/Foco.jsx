
import { useGLTF } from "@react-three/drei";

export default function Foco(props) {
  const { nodes, materials } = useGLTF("/static/focus.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 4, 0, 0]} position={[4,6,-4]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/focus.glb");


