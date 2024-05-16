import React from 'react'
import {useNavigate} from 'react-router-dom'

function Review() {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className='w-full rectangle_bg pb-8 px-8 md:px-32 xl:px-44 2xl:px-52'>
      <div className="flex flex-col justify-center items-center sm:pb-3 py-6 sm:pt-8 lg:pb-6 lg:pt-10 xl:pt-14 xl:pb-10 2xl:pb-20">
        <h1 className='text-white font-extrabold text-sm md:text-3xl lg:text-2xl xl:text-4xl 2xl:text-6xl mb-1 sm:mb-3 lg:mb-5'>Review: Complete your Profile</h1>
        <p className='text-white text-xs leading-none sm:leading-3 md:text-lg xl:2xl md:w-full lg:w-3/5 text-center md:tracking-wide xl:tracking-wider'>You are just few steps away from you professional CV. Complete your profile</p>
      </div>
        <div className='flex flex-col flex-wrap border items-center md:justify-center md:flex-row w-full px-0 py-6 sm:p-10 box_shadow gap-5 bg-white rounded-lg'>
          <div className='bg-white box_shadow rounded-xl py-10 px-8'>
               <div className="flex flex-col justify-center items-center w-full gap-3">
                  <div className='md:h-40 md:w-40 h-[120px] w-[120px] rounded-full overflow-hidden'>
                  <img src="https://avatars.githubusercontent.com/u/127143084?v=4" alt="" />
                  </div>
                  <h3 className='capitalize font-semibold md:text-lg'>{user.basic.f_name ? user.basic.f_name : 'waren'} {user.basic.l_name ? user.basic.l_name : "waren"}</h3>
                  <p className='text-[#767676] text-base font-normal'>Font-end Developer</p>
                  <div className=' mb-6'>
                    <i className="text-xs fa-brands fa-facebook-f text-center cursor-pointer sm:text-lg  w-6 h-6 md:h-8  pt-1 sm:w-8 sm:py-1 rounded-full ml-2 text-white bg-[#635AE3] "></i>
                    <i className="text-xs fa-brands fa-instagram text-center cursor-pointer  sm:text-lg w-6 h-6  md:h-8 pt-1  sm:w-8 sm:py-1 rounded-full ml-2 text-white bg-[#635AE3] "></i>
                    <i className="text-xs fa-brands fa-twitter text-center cursor-pointer  sm:text-lg w-6 h-6  md:h-8 pt-1  sm:w-8 sm:py-1 rounded-full ml-2 text-white bg-[#635AE3] "></i>
                    <i className="text-xs fa-brands fa-linkedin text-center cursor-pointer  sm:text-lg w-6 h-6  md:h-8 pt-1  sm:w-8 sm:py-1 rounded-full ml-2 text-white bg-[#635AE3] "></i>
                    <i className="text-xs fa-brands fa-youtube text-center cursor-pointer  sm:text-lg w-6 h-6  md:h-8 pt-1  sm:w-8 sm:py-1 rounded-full ml-2 text-white bg-[#635AE3] "></i>
                    <i className="text-xs fa-solid fa-globe text-center cursor-pointer  sm:text-lg w-6 h-6  md:h-8 pt-1  sm:w-8 sm:py-1 rounded-full ml-2 text-white bg-[#635AE3] "></i>
                  </div>
               </div>
               <hr />
               <ul className='text-xs'>
                <li className='my-4 flex justify-between'>
                    <p><i className="text-xs fa-solid fa-user"></i> &nbsp; Basic Information</p>
                    <span className='text-blue-600 cursor-pointer'>Edit</span>
                </li>
                <li className='my-4 flex justify-between'>
                    <p><i className="text-xs fa-regular fa-envelope"></i> &nbsp; Credentials</p>
                    <span className='text-blue-600 cursor-pointer'>Edit</span>
                </li>
                <li className='my-4 flex justify-between'>
                    <p><i className="text-xs fa-solid fa-link"></i> &nbsp; Public Link</p>
                    <span className='text-blue-600 cursor-pointer'>Edit</span>
                </li>
                <li className='my-4 flex justify-between'> 
                    <p><i className="text-xs fa-solid fa-graduation-cap"></i> &nbsp; Education</p>
                    <span className='text-blue-600 cursor-pointer'>Add</span>
                </li>
                <li className='my-4 flex justify-between'>
                    <p><i className="text-xs fa-regular fa-circle-check"></i> &nbsp; Industry</p>
                    <span className='text-blue-600 cursor-pointer'>Add</span>
                </li>
                <li className='my-4 flex justify-between'>
                    <p><i className="text-xs fa-solid fa-trophy"></i> &nbsp; Awards</p>
                    <span className='text-blue-600 cursor-pointer'>Add</span>
                </li>
               </ul>
          </div>
          <div className='px-10 py-4'>
            <div className="flex flex-col items-center gap-3 mb-4">
            <h1 className='font-semibold md:text-lg text-center'>Already Have a Resume?</h1>
            <button className="btn text-white px-16 sm:px-24 rounded-lg py-2 text-xs md:mt-5 md:mb-8">Upload File</button>
            </div>
            <ul className='text-xs md:text-base 2xl:text-lg text-[#373737]'>
              <li className="flex border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                <p><i className="text-xs fa-regular fa-file-lines"></i>&nbsp; Summary</p> 
                <span className='text-blue-600 '>Edit</span>
              </li>
              <li className="flex border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                <p><i className="text-xs fa-solid fa-rotate-left"></i>&nbsp; Work History</p> 
                <span className='text-blue-600 '>Edit</span>
              </li>
              <li className="flex border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                <p><i className="text-xs fa-regular fa-folder"></i>&nbsp; Project</p> 

                <span className='text-blue-600 '>Edit</span>
              </li>
              <li className="flex border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                <p><i className="text-xs fa-brands fa-galactic-republic"></i>&nbsp; Certifications</p> 
                <span className='text-blue-600 '>Edit</span>
              </li>
              <li className="flex border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                <p><i className="text-xs fa-solid fa-chart-simple"></i>&nbsp; Skills</p> 
                <span className='text-blue-600 '>Edit</span>
              </li>
              <li className="flex border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                <p><i className="text-xs fa-solid fa-location-dot"></i>&nbsp; Preferred Job City</p> 
                <span className='text-blue-600 '>Edit</span>
              </li>
              <li className="flex border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                <p><i className="text-xs fa-solid fa-futbol"></i>&nbsp; Hobbies/Activites</p> 
                <span className='text-blue-600 '>Edit</span>
              </li>
              <li className="flex border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                <p><i className="text-xs fa-solid fa-globe"></i>&nbsp; Languages</p> 
                <span className='text-blue-600 '>Edit</span>
              </li>
              <li className="flex border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                <p><i className="text-xs fa-solid fa-virus-covid"></i>&nbsp; References</p> 
                <span className='text-blue-600 '>Edit</span>
              </li>
            </ul>
          </div>
          <div className='p-4 h-fit bg-white box_shadow rounded-xl flex flex-col items-center md:self-start'>
            <h3 className='mb-4 font-smeibold text-lg'><i className="text-xs fa-solid fa-user"></i> Profile Strength</h3>
            <div className="text-xs chart mb-8">
                  <h1>42%</h1>
            </div>
            <button className='text-[#635EA3] hover:text-white hover:bg-[#635EA3]  border border-[#635EA3] px-20 text-xs w-full rounded-lg py-2.5'>Download CV</button>
          </div>
          <div className='w-full flex gap-2 flex-wrap items-center justify-around mt-12 text-xs'>
            <button className='border font-bold w-52 sm:w-80 text-[#635EA3] border-[#635AE3] py-2.5 rounded-lg capitalize'
              onClick={()=>{navigate('/experience')}}
            >previos</button>
            <button className='btn border font-bold w-52 sm:w-80 text-white border-[#635AE3] py-2.5 rounded-lg capitalize'
              onClick={()=>{navigate(`/user/${user.id}`)}}
            >save profile</button>
          </div>
      </div>
    </div>
  )
}

export default Review
