import React from 'react'

function Explore() {
    return (
        <div className='py-28'>
            <div className='w-[1200px] bg-[#635EA3] rounded-[20px] overflow-hidden mx-auto border relative'>
                <img src="../img/Ellipse 308.png" className='absolute' alt="" />
               <div className=' mt-[62px] ml-[104px]'>
               <h1 className='w-[628px] break-all text-5xl text-white font-bold'>
                    Explore New Opportunities on the GO!
                </h1>
                <button className='px-10 mt-8 mb-14 py-4 bg-white capitalize rounded-xl font-semibold text-[#2C3131]'>get started</button>
               </div>
               <div className='absolute -bottom-64 inset-x-96 h-[430px] z-10'>
                    <img src="../img/Ellipse 309.png" alt="" />
               </div>
               <div className='absolute right-0 bottom-0'>
                    <img src="../img/Ellipse 307.png" alt="" />
                    <img src="../img/Ellipse 310.png" alt="" className='absolute right-0 top-0' />
                    <img src="../img/Titik-titik.png" alt="" className='absolute z-20 inset-x-52 bottom-0' />
               </div>
            </div>
        </div>
    )
}

export default Explore
