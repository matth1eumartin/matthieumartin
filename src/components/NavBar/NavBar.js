import React from 'react'
import { motion } from 'framer-motion';
import Logo from './Logo';



const NavBar = () => {
  return (
    <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 1, type: 'easeInOut', stiffness: 240 }}
        >
        <nav className='flex fixed w-full items-center justify-between px-6 py-3 bg-white z-[100]'>
            <div className='flex items-center'>
                <a href="/" className='pl-16'><Logo /></a>
            </div>
            <div className='flex text-2xl font-semibold px-12 py-2'>
                <a class='group transition-all duration-300 ease-in-out px-12' href='#home'>
                  <span class='bg-left-bottom bg-gradient-to-r from-islandGreen to-islandGreen bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    home
                  </span>
                </a>
                <a class='group transition-all duration-300 ease-in-out px-12' href='#about'>
                  <span class='bg-left-bottom bg-gradient-to-r from-islandGreen to-islandGreen bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    about me
                  </span>
                </a>
                <a class='group transition-all duration-300 ease-in-out px-12' href='#projects'>
                  <span class='bg-left-bottom bg-gradient-to-r from-islandGreen to-islandGreen bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                    projects
                  </span>
                </a>
            </div>

        </nav>
    </motion.div>
  )
}

export default NavBar