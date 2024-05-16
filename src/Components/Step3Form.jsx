import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBasicInfo } from '../Actions/action'

function Step3Form() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const stepper = ["Basic Information", "Contact Information", "Experience", "Complete your profile"]
    const [currentStep, setcurrentStep] = useState(3)
    const [data, setData] = useState({})

    const { job_city, experience, expected_designation} = data
    const user = JSON.parse(localStorage.getItem('user'))

    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const [error, setError] = useState()

    const errors = {}
    const handleValidation = () => {

        if (!job_city) {
            errors.job_city = "job city is required"
        }
        setError(errors)

        if (Object.keys(errors).length === 0) {
            return true
        }
        else {
            return false
        }
    }
    const obj = {...user, experience: data}

    const handleSubmit = () => {
        const isValid = handleValidation()

        if (isValid) {
               dispatch(addBasicInfo(obj))
               navigate('/completion')
        }
    }

    return (
        <div className="relative">
            <img src="../img/Rectangle 419.png" className='absolute top-0 z-0' alt="here are" />
            <div className="flex flex-col justiify-center items-center pt-10">
                <h1 className='text-center relative text-white text-[48px] font-bold'>Step 3: {stepper[2]}</h1>
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
                            <label>Job City<span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12'
                                name="job_city"
                                value={job_city}
                                onChange={handleData}
                                placeholder='lahore etc...' />
                            {error && <span className='left-0 truncate italic text-red-500 text-xs absolute -bottom-4'>{error.job_city}</span>}
                        </div>
                        <div className='flex flex-col  relative'>
                            <label>Expected Designation</label>
                            <input type="text"
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12'
                                name="expected_designation"
                                value={expected_designation}
                                onChange={handleData} />
                        </div>
                        <div className='flex flex-col relative'>
                            <label>Experience</label>
                            <input
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12'
                                type="text"
                                value={experience}
                                onChange={handleData}
                                placeholder='fresh'
                                name="experience" />
                        </div>
                        </div>
                        <div className=' pt-12 flex justify-center gap-20'>
                            <button className=' text-[#635AE3] border border-[#635AE3] rounded-xl px-[148.86px] py-[15px] text-sm leading-6 capitalize'
                                onClick={() => { navigate('/contact_info') }}>Previous</button>
                                <button className='btn text-white  rounded-xl px-[148.86px] py-[15px] text-sm leading-6 capitalize'
                                onClick={handleSubmit}>Next</button>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default Step3Form;
