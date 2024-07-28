import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y:-100}} transition={{duration: 0.5}} className='my-10 text-center text-4xl text-white'>Get in Touch</motion.h2>
        <div className='text-center tracking-tighter'>
            <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1}} className='my-4 text-white'>{CONTACT.phoneNo}</motion.p>
            <motion.a whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:100}} transition={{duration: 1}} href="sharanyaswant.06@gmail.com" className='text-white border-b'>{CONTACT.email}</motion.a><br />
            <motion.a whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1}} href="https://github.com/SHARANYASWANT" className='text-white border-b'>{CONTACT.git}</motion.a><br />
            <motion.a whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:100}} transition={{duration: 1}} href="https://linkedin.com/in/sharan-yaswant-a%20668313290%20%7C" className='text-white border-b'>{CONTACT.linked}</motion.a>
        </div>
    </div>
  )
}

export default Contact