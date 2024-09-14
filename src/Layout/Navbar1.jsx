import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <div className='py-6 flex justify-center gap-10'>
        <div className='flex gap-10'>    
        <div className='w-16 h-16 rounded-full bg-customBlue'></div>
        <div className='w-16 h-16 rounded-full bg-customBlue'></div>
        </div>
        <div className='border-b-4 rounded-3xl border-customBlue pt-2 pb-5'>          
        <nav className='flex justify-center my-auto gap-20 text-xl font-semibold text-gray-500  px-10 '>
            <NavLink>Home</NavLink>
            <NavLink>About Us</NavLink>
            <NavLink>Incubation</NavLink>
            <NavLink>Events</NavLink>
            <NavLink>Contact Us</NavLink>
        </nav>
        </div>
        <div className='w-28 h-16 rounded-3xl bg-customBlue'></div>
    </div>
  )
}

export default Navbar1