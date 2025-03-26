import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../section/HackerRoom'
import { PerspectiveCamera, Ring } from '@react-three/drei'
import CanvasLoader from '../section/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../section/target'
import ReactLogo from '../section/ReactLogo'
import Cube from '../section/Cube'
import Rings from '../section/Rings'
import HeroCamera from '../section/HeroCamera'
import Button from '../section/Button'

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
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const isSmall = useMediaQuery({ maxWidth: 440 })

    const Sizes = calculateSizes(isMobile, isSmall, isTablet)
    



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
                            <HeroCamera isMobile={isMobile}>

                                <HackerRoom
                                    scale={Sizes.deskScale}
                                    position={Sizes.deskPosition}
                                    rotation={[0, -Math.PI, 0]}
                                // position={[x.positionX, x.positionY, x.positionZ]}
                                // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                                // scale={[x.scale, x.scale, x.scale]}

                                />

                            </HeroCamera>
                            

                            <group>



                                <Target position={Sizes.targetPosition} />
                                <ReactLogo position={Sizes.reactLogoPosition} />
                                <Rings position={Sizes.ringPosition} />
                              

                                <Cube position={Sizes.cubePosition} />

                            </group>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                            <ambientLight intensity={5} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>
                <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                    <a href="contact " className='w-fit'><Button name='Lets Work Together' isBean containerClass='sm:w-fit w-full sm:min-w-96px' /></a>
                </div>

            </div>

        </section>
    )
}

export default Hero
