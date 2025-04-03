import React from 'react'

const Footer = () => {
    return (
        <section className='c-space pt-7 pb-3 border-3 border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-white-500 flex gap-2'>
                <p>
                    Terms & Condition
                </p>
                <p>|</p>

            </div>
            <div className='flex gap-3'>
                <div className='social-icon'>
                    <a href="https://github.com/Sourav-eng">
                        <img className='w-1/2 h-1/2' src="/assets/github.svg" alt="github" /></a>
                    <a href="">
                        
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Footer
