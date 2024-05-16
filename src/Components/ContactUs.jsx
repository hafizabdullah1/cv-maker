import React from 'react'

function LetsTalk() {
    return (
        <div className='px-24 flex gap-10 relative'>
            <div>
                <img src="../img/Group 15.png" alt="" />
                <img src="../img/Group 90.png" className='p-24' alt="" />
            </div>
            <div className='relative'>

                <img src="../img/Group 5.png"  alt="" className='bottom-16 absolute' />

        <div style={{"box-shadow": "0px 10px 40px 0px #8552E51A"}} className='flex justify-center items-center flex-col bg-white h-[665px] w-[553px] relative z-10 left-8 rounded-xl'>
            <h2 className='font-extrabold text-2xl uppercase mr-8 mb-5 tracking-wider'>Contact us</h2>
          <form action="submit" className='px-12 py-3'>
            <div className='mb-4'>
              <label className='block font-normal text-sm tracking-wide max-w-11 mb-2'>Name<span className='text-red-500'>*</span></label>
              <input placeholder='Enter name' type="text" name="" id="" className='placeholder:pl-5 w-[323px] h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border' />
            </div>
            <div className='mb-4'>
              <label className='block font-normal text-sm tracking-wide w-11 mb-2'>Name<span className='text-red-500'>*</span></label>
              <input placeholder='Enter name' type="text" name="" id="" className='placeholder:pl-5 w-[323px] h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border' />
            </div>
            <div className='mb-4'>
              <label className='block font-normal text-sm tracking-wide w-11 mb-2'>Name<span className='text-red-500'>*</span></label>
              <input placeholder='Enter name' type="text" name="" id="" className='placeholder:pl-5 w-[323px] h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border' />
            </div>
            <div className='mb-4'>
              <label className='block font-normal text-sm tracking-wide w-11 mb-2'>Name<span className='text-red-500'>*</span></label>
              <input placeholder='Enter name' type="text" name="" id="" className='placeholder:pl-5 w-[323px]  h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border' />
            </div>
          </form>
          <div className='flex justify-center flex-col items-center'>
            <button className='text-center btn text-white w-[323px] py-3.5 rounded-xl'>Send Message</button>
            <p className='w-[323px] relative text-center my-4 text-xs text-[#767676]'>
              <span className='before:inline-block before:content-[""] before:absolute before:h-0.5 before:w-24 before:left-0 before:top-2 before:bg-[#767676]'></span>
              or signup with
              <span className='after:inline-block after:content-[""] after:absolute after:h-0.5 after:w-24 after:right-0 after:top-2 after:bg-[#767676]'></span>
            </p>
            <div className='mb-7'>
              <button className='px-6 py-2 border mr-2'>
                <img src="../img/search 1.png" alt="1" />
              </button>
              <button className='px-6 py-2 border'>
                <img src="../img/facebook 3.png" height={13} width={13} alt="2" />
              </button>
            </div>
          </div>
        </div>
            </div>
        </div>
    )
}

export default LetsTalk
