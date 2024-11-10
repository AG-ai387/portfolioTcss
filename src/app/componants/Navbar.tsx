import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import Link from 'next/link';


const Navbar = () => {
  return (
    
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>AG</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href="#hero">Home</a></li>
                <li className='menuLink'><a href="#about">About</a></li>
                <li className='menuLink'><a href="#contact">Contact</a></li>
            </ul>
            <CiMenuKebab className='md:hidden' size={30} />

        </div>
      
    </div>
  )
}

export default Navbar
