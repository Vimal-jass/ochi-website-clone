import { easeIn, motion } from 'framer-motion'
import { span } from 'framer-motion/client'
import gsap from 'gsap/all'
import React, { useState } from 'react'

function Features() {
  



  
  return (
    <div className='w-full py-10 bg-zinc-600'>
      <div className='w-full px-10 border-b-[1px] border-zinc-600 pb-[5vw] '>
        
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
      </div>
      <div>
        <div className="cards w-full flex justify-between gap-10 p-10 ">
          <div  className='cardContainer w-1/2     h-[80vh] relative  '>
          <h1 className='absolute flex left-full -translate-x-1/2 overflow-hidden top-1/2 -translate-y-1/2 text-[#CDEA68] font-["Neue_Montreal text-6xl tracking-tight leading-none'>
          {"FYDE".split("").map((item, index)=>(
            <span>{item}</span>
          ))}
          </h1>
            <div className='card w-full h-full  rounded-xl overflow-hidden'>
              <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
            </div>
          </div>

          <div  className='cardContainer w-1/2 relative h-[80vh]  '>
          <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-["Neue_Montreal text-6xl tracking-tight leading-none'>
          {"VISE".split("").map((item, index)=>(
            <span>{item}</span>
          ))}
          </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
            </div>

          </div> 

          
        </div>
      </div>
    </div>
  )
}

export default Features