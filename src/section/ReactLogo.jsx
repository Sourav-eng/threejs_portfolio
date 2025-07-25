import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/react.glb')
    return (
        <Float floatIntensity={1}>
            <group position={[8,8,0]} scale={0.5}  {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002'] }
                    material-color='#16adde'
                    position={[0, 0.079, .181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[.39, .39, .5]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/reactglb')

export default  ReactLogo
