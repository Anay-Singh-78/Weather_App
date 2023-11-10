import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
     return (
    <div className='flex w-[50%] flex-col mx-auto mb-8 lg:mb-12'>
       <NavLink to='/'><h1 className='text-2xl lg:text-3xl uppercase font-semibold mt-6 mb-8 lg:mb-16   text-slate-200'>Weather App</h1></NavLink> 
        <div className='flex lg:justify-between flex-col lg:flex-row gap-2 lg:gap-0 justify-center items-center  text-lg text-slate-300'>
         <NavLink to="/">
            <p className='inline-block nav-para'>Your Weather</p>
         </NavLink>
         <NavLink to="/location">
           <p className='inline-block nav-para'> Search Weather</p>
         </NavLink>
        </div>
    </div>
  )
}

export default Navbar