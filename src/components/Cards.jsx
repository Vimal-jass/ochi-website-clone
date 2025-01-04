import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 items-center px-10 flex gap-5 '>
            <div className=' cardContainer w-1/2  h-[70vh] '>
                <div className='cards relative w-full rounded-xl h-full  bg-[#125951] flex justify-center items-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-10 bottom-10 px-3 py-1 border-[2px] rounded-full '>&copy; 2019-2020</button>
                </div>
            </div>
            <div className=' cardContainer w-1/2  h-[70vh] flex gap-5 '>
                <div className='cards w-1/2 relative rounded-xl h-full bg-[] bg-[#125951] flex justify-center items-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-3 py-1 border-[2px] rounded-full '>&copy; 2019-2020</button>
                </div>
                <div className='cards w-1/2 relative rounded-xl h-full bg-[] bg-[#125951] justify-center flex items-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-10 bottom-10 px-3 py-1 border-[2px] rounded-full '>&copy; 2019-2020</button>
                </div>
            </div>

        </div>
    )
}

export default Cards