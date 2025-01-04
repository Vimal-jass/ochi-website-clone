import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.8" className='w-full  bg-zinc-900 pt-1'>
            <div className="textStructure mt-40 px-20">
            {["We Create" , "Eye Opening" , "presentations"].map((item , index)=>{
                return <div className="masker">
                    <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[0.65] font-['Founders Grotesk'] font-medium">
                        {item}
                    </h1>
                </div>
            })}
            </div>
            <div className='border-t-2 border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
                {["for public and private companies", "from the first pitch to IPO"].map((item, index) => (
                    <p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>
                ))}
                <div className="start flex items-center gap-5 ">
                    <div className='px-5 py-2 border-[1px] border-zinc-600 rounded-full font-light text-md uppercase '>START THE PROJECT</div>
                    <div className='w-7 h-7 border-[2px] border-zinc-600 rounded-full flex justify-center items-center '>
                       <span className='rotate-[45deg]'>
                       <FaArrowUp />
                       </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage