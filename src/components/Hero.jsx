import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../section/HackerRoom'
import { PerspectiveCamera } from '@react-three/drei'
import CanvasLoader from '../section/CanvasLoader'
import { Leva, useControls } from 'leva'

const Hero = () => {
    // const x = useControls('HackerRoom', {
    //     positionX: { value: 2.5, min: -10, max: 10 },
    //     positionY: { value: 2.5, min: -10, max: 10 },
    //     positionZ: { value: 2.5, min: -10, max: 10 },

    //     rotationX: { value: 0, min: -10, max: 10 },
    //     rotationY: { value: 0, min: -10, max: 10 },
    //     rotationZ: { value: 0, min: -10, max: 10 },

    //     scale: { value: 1, min: 0.1, max: 10 }

    // });


    return (
        <section className='min-h-screen  w-full flex flex-col relative '>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 justify-center text-center'>
                <p className='sm:text-3xl text-2xl font-medium text-white font-generalsans'>Hello, I am Sourav <span className='waving-hand'>👋</span></p>

                <p className='hero_tag text-gray_gradient'>
                    Building Product & Brands
                </p>
                {/* <Leva /> */}
                <div className='w-full h-full absolute inset-0 -z-10'>
                    <Canvas className='w-full h-full'>
                        <Suspense fallback={<CanvasLoader />}>

                            <HackerRoom
                                scale={0.1} 
                                position={[0.3, -10, 2.6]}
                                rotation={[0, -Math.PI, 0]} 
                                // position={[x.positionX, x.positionY, x.positionZ]}
                                // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                                // scale={[x.scale, x.scale, x.scale]}


                            />
                            <PerspectiveCamera makeDefault position={[0, 0, 25]} />
                            <ambientLight intensity={10} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>

        </section>
    )
}

export default Hero
