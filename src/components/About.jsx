import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black'>
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4vw] tracking-tight">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#2e321c] ">
        <div className='w-1/2'>
          <h1 className='text-[3vw] '>Our approach:</h1>
          <button className='flex uppercase items-center gap-7 py-4 px-8 bg-zinc-900 mt-5 text-white rounded-full'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-[80vh] rounded-2xl bg-[#b0ce45]'></div>
      </div>

    </div>

  )
}

export default About