import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div data-scroll data-scroll-section  data-scroll-speed=".5" className='w-full py-10 rounded-tl-2xl  rounded-tr-2xl  bg-[#004D43] '>
        <div className='border-t-2 border-b-2 border-zinc-300  flex overflow-hidden whitespace-nowrap '>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}}  className='text-[18vw] uppercase leading-none font-["Founders Grotesk"]  font-bold pt-[1.5vw]  mb-[1.5vw] ' >we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}}  className='text-[18vw] uppercase leading-none font-["Founders Grotesk"] font-bold  pt-[1.5vw] mb-[1.5vw]' >we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}}  className='text-[18vw] uppercase leading-none font-["Founders Grotesk"] font-bold  pt-[1.5vw] mb-[1.5vw]' >we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee