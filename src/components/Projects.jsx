import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei'
import CanvasLoader from '../section/CanvasLoader'

const projectCount = myProjects.length

const Projects = () => {
    const [selectedProjectIndex, setselectedProjectIndex] = useState(0)

    const currnetProject = myProjects[selectedProjectIndex]
    const handleNavigation = (direction) => {
        setselectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? prevIndex : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }

        });
    };


    return (
        <section className='c-space my-20'>
            <p className='head-text'>My Work </p>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                <div className='flex flex-col gap-5 relative sm:p-10 py-10 shadow-2xl shadow-black-200'>
                    <div className='absolute top-0 right-0'>
                        <img src={currnetProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />
                    </div>
                    <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg ' style={myProjects[0].logoStyle}>
                        <img src={currnetProject.logo} alt="logo" className='w-10 h-10 shadow-sm' />
                    </div>
                    <div className='flex flex-col gap-5 text-white-600 my-5 '>
                        <p className='text-white text-2xl font-bold anitmatedText'>{currnetProject.title}</p>
                        <p className='animatedText'>{currnetProject.desc}</p>
                        <p className='animatedText'>{currnetProject.subdesc}</p>
                    </div>
                    <div className='flex items-center gap-3 flex-wrap justify-evenly  '>
                        {currnetProject.tags.map((tag, index) => (
                            <div key={index} className='tech-logo'>
                                <img src={tag.path} alt={tag.name} />
                            </div>
                        ))}
                        <a className='flex items-center  gap-2 cursor-pointer text-white-600' href={currnetProject.href} target='_blank' rel='noreferrer'>
                            <p>Check live Site</p>
                            <img className='w-3 h-3 ' src="/assets/arrow-up.png" alt="arrow" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-between  items-center mt-7'>
                    <button className='arrow-btn' onClick={() => {
                        handleNavigation('previous')
                    }
                    }>
                        <img className='w-4 h-4' src="/assets/left-arrow.png" alt="left-arrow" />

                </button>
                    <button className='arrow-btn' onClick={() => {
                        handleNavigation('next')
                    }
                    }>
                        <img className='w-4 h-4' src="/assets/right-arrow.png" alt="right-arrow" />

                </button>
            </div>
        </div>
        <div className='rounded-lg h-96 md:h-full border border-black-300 bg-black-200'>
            <Canvas>
                <ambientLight intensity={1}/>
                <directionalLight position={[10,10,5]}/>

                <Center>
                    <Suspense fallback={<CanvasLoader/>}>
                        <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>

                        </group>
                    </Suspense>
                </Center>

            </Canvas>

           
        </div>
        </section >
    )
}

export default Projects
