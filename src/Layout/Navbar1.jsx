import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <div className='py-6 flex justify-center items-center gap-2'>
        <div className='flex gap-5'>    
        <div className='w-16 h-16 rounded-full bg-yellow-400'></div>
        <div className='w-16 h-16 rounded-full bg-yellow-400'></div>
        </div>
        <div className='border-b-4 py-5'>          
        <nav className='flex justify-center my-auto gap-10 text-lg font-semibold text-gray-500  px-10 '>
            <NavLink>Home</NavLink>
            <NavLink>About Us</NavLink>
            <NavLink>Incubation</NavLink>
            <NavLink>Events</NavLink>
            <NavLink>Contact Us</NavLink>
        </nav>
        </div>
        <div className='w-28 h-16 rounded-full bg-yellow-400'></div>
    </div>
  )
}

export default Navbar1