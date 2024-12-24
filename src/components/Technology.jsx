import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiHtml5 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { FaPython } from 'react-icons/fa6'
import { CgCPlusPlus } from 'react-icons/cg'
import { DiJava } from 'react-icons/di'
import { DiGithub } from 'react-icons/di'
import { DiMysql } from 'react-icons/di'
import { animate, motion } from "framer-motion"
import { MdOpacity } from 'react-icons/md'
import { SiNestjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";


const icon = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technology = () => {
  return (
    <motion.div className='border-b border-neutral-800 pb-24'>
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y:-100}} transition={{duration: 1.5}} className='my-20 text-center text-4xl text-white'>Technologies</motion.h2>
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={icon(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={icon(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiHtml5 className='text-7xl text-red-400'/>
            </motion.div>
            <motion.div variants={icon(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiCss3 className='text-7xl text-blue-400'/>
            </motion.div>
            <motion.div  variants={icon(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJavascript1 className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div  variants={icon(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-7xl text-orange-400'/>
            </motion.div>
            <motion.div  variants={icon(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <CgCPlusPlus className='text-7xl text-violet-400'/>
            </motion.div>
            <motion.div  variants={icon(8)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJava className='text-7xl text-red-400'/>
            </motion.div>
            <motion.div  variants={icon(1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className='text-7xl text-white'/>
            </motion.div>
            <motion.div  variants={icon(7)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMysql className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div  variants={icon(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-400'/>
            </motion.div>
            <motion.div  variants={icon(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiNestjs className='text-7xl text-red-400'/>
            </motion.div>
            <motion.div  variants={icon(8)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-blue-400'/>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Technology