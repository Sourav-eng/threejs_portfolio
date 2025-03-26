import React from 'react'

const About = () => {
    return (
        <section className='c-space my-20'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 gap-5  h-full'>
                <div className="col-span-1 xl:row-span-3">
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hello, I am Sourav</p>
                            <p className='grid-subtext'>a passionate web developer with expertise in HTML, CSS, JavaScript, and backend technologies like Node.js. I enjoy building interactive 
                                and user-friendly web applications,
                                 from dynamic projects. </p>
                        </div>
                    </div>

                </div>
                <div className='col-span-1 xl:row-span-3 ' >
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-2" className='w-full h-fit object-contain sm:w-[276px]' />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
