import React from 'react'
import {HERO_CONTENT} from '../constants'
import prof from '../assets/pp.jpg'
import { motion } from "framer-motion"
import { Typed } from 'react-typed'

const container = (delay) => ({
    hidden: {y: -100, opacity:0},
    visible: {y: 0, opacity:1, transition: {delay: delay, duration: 0.5}}
})

const Intro = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
    <div className='flex flex-wrap'>    
        <div className='w-full lg:full text-center'>
            <motion.div variants={container(0)} initial="hidden" animate="visible" className='flexflex-col items-center lg:items-center text-center'>
                <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-10 text-2xl font-thin tracking-tight lg:mt-14 lg:text-7xl text-white text-center'>Sharan Yaswant</motion.h1>
                <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent text-center'>Full Stack Developer</motion.span>
                <motion.p variants={container(0.5)} initial="hidden" animate="visible" className='my-2 max-w-full py-6 font-light tracking-tighter text-white text-center'>
                    {HERO_CONTENT}
                </motion.p>
                <br />
                <a href="https://flowcv.com/resume/rhfi1dsgcw" class="inline-block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-110">
                    Get My Resume
                </a>
            </motion.div>
        </div>
        {/* <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <img src={prof} alt="" />
            </div>
        </div> */}
    </div>
</div>
)
}

export default Intro