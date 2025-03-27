import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../section/Button'

const About = () => {
    return (
        <section className='c-space my-20'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 gap-5 h-full'>
                <div className="col-span-1 xl:row-span-3">
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hello, I am Sourav</p>
                            <p className='grid-subtext'>
                                A passionate web developer with expertise in HTML, CSS, JavaScript, and backend technologies like Node.js. 
                                I enjoy building interactive and user-friendly web applications.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full h-fit object-contain sm:w-[276px]' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>
                                I specialize in JavaScript with a focus on the React and Next.js ecosystem.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full h-fit flex sm:h-[326px] justify-center items-center'>
                            <Globe 
                                height={326} 
                                width={326}
                                showAtmosphere
                                backgroundImageOpacity={0.5}
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                backgroundColor="rgba(0,0,0,0)"
                                labelsData={[
                                    {
                                        lat: 26, lng: 80,
                                        text: 'Hello there! I am here',
                                        color: 'white',
                                        size: 2
                                    }
                                ]}
                            />
                        </div>
                        <div>
                        <p className='grid-headtext'>
                                I can work remotely fom any timezones.
                            </p>
                        <p className='grid-subtext'>
                                I based in India, with remote work avaiable 
                            </p>
                            <Button name='Contact Me' isBean containerClass= 'w-fit mt-10'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
