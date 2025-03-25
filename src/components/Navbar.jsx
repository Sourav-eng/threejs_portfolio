import React, { useState } from 'react'
import { navLinks } from '../constants/index'



const NAvitem = () => {
    return (
        <ul className='nav-ul'>
            {navLinks.map(({ id, name, href }) => (
                <li key={id} className='nav-li'>
                    <a href={href} className='nav-li-a' onClick={() => {

                    }
                    }>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )

}


const Navbar = () => {
    const [isopen, setopen] = useState(false)
    function ToggleMenu() {
        setopen(prevopen => !prevopen)


    }
    return (
        <header className='fixed top-0 right-0 left-0 z-50 bg-black-100'>
            <div className='max-w-[1280px]  flex justify-between items-center py-5 mx-auto c-space'>

                {/* <div className="flex justify-between "></div> */}
                <a className='text-neutral-400 font-bold text-xl hover:text-white transition-colors' href="/">Checkout this</a>

                <button onClick={ToggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex ' aria-label='ToggleMenu'>
                    <img className='w-6 h-6' src={isopen ? "/assets/close.svg" : "/assets/menu.svg"} alt="toggle" />
                </button>
                <nav className='hidden sm:flex'>
                    <NAvitem />
                </nav>

            </div>
            <div className={`nav-sidebar overflow-hidden transition-all duration-300 ease-in-out ${isopen ? 'max-h-[500px]' : 'max-h-0'}`}>
                <nav className='p-5'>
                    <NAvitem />
                </nav>
            </div>


        </header>
    )
}

export default Navbar
