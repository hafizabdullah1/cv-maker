import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Step4Form() {
    const navigate = useNavigate()
    const stepper = ["Basic Information", "Contact Information", "Experience", "Complete your profile"]
    const [currentStep, setcurrentStep] = useState(4)

    // const user = JSON.parse(localStorage.getItem('user'))

    const handleSubmit = () => {
        navigate('/review_profile')
    }

    return (
        <div className="relative">
            <img src="../img/Rectangle 419.png" className='absolute top-0 z-0' alt="here are" />
            <div className="flex flex-col justiify-center items-center pt-10">
                <h1 className='text-center relative text-white text-[48px] font-bold'>Step 4: {stepper[3]}</h1>
                <p className='text-center relative text-white lg:w-[679px] text-2xl'>Let’s get you noticed!Work ecperience will increase your chances of landing that next job</p>
            </div>
            <div className='shadow-[0px 10px 40px 0px #8552E51A]'>
                <div className='bg-white mx-auto w-4/5 relative mt-8 rounded-xl shadow-xl py-10'>
                    <div className='py-10 flex justify-center truncate'>
                        {
                            stepper?.map((step, i) => (
                                <div key={i} className={`flex flex-col justify-center items-center w-36 relative step ${currentStep === i + 1 && 'active'} ${i + 1 < currentStep && 'complete'}`}>
                                    <div className='mb-4 w-10 h-10 relative flex items-center justify-center z-10 bg-[#DCDCDC] font-semibold rounded-full'>{i + 1}</div>
                                    <p className='opacity-50 text-gray-800'>{step}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='py-10 px-40 grid-cols-2 content-center justify-items-center justify-center  grid gap-x-20 gap-y-10'>
                        <div className='flex flex-col relative'>
                            <label className='text-center mb-4'>I already have a CV/Resume</label>
                            <button onClick={()=>{alert('Not supported right now! \nPlease create your profile from scratch')}} className='truncate btn text-white rounded-xl px-[148.86px] py-[15px] text-sm leading-6 capitalize'>upload file</button>
                        </div>
                        <div className='flex flex-col  relative'>
                            <label className='text-center mb-4'>Create profile from scratch</label>
                            <button className='btn text-white rounded-xl px-[148.86px] py-[15px] text-sm leading-6 capitalize'
                                onClick={handleSubmit}
                            >continue</button>
                        </div>
                        </div>
                        <div className=' pt-12 flex justify-center gap-20 items-center'>
                            <button className=' text-[#635AE3] border border-[#635AE3] rounded-xl px-[148.86px] py-[15px] text-sm leading-6 capitalize'
                                onClick={() => {navigate('/experience') }}>Previous</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Step4Form;
