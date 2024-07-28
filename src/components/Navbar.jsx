import React from 'react'
import logo from "../assets/logo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='nb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center text-white'>
            <img src={logo} alt="logo" width="50px" height="50px"/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl text-white'>
            <FaLinkedin></FaLinkedin>
            <FaGithub></FaGithub>
            <FaSquareXTwitter></FaSquareXTwitter>
            <FaInstagram></FaInstagram>
        </div>
    </nav>
  )
}

export default Navbar