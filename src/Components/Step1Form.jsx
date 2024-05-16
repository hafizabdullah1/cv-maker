import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBasicInfo } from '../Actions/action'

function Step1Form() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const stepper = ["Basic Information", "Contact Information", "Experience", "Complete your profile"]
    const [currentStep, setcurrentStep] = useState(1)
    const [data, setData] = useState({ gender: "male" })


    const { gender, f_name, l_name, dob, degree } = data
    const user = JSON.parse(localStorage.getItem('user'))

    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const [error, setError] = useState()

    const errors = {}
    const handleValidation = () => {

        if (!f_name) {
            errors.fname = "first name is required"
        }
        if (!l_name) {
            errors.lname = "last name is required"
        }
        if (!dob) {
            errors.dob = "DOB is required"
        }
        if (!degree) {
            errors.degree = "degree is required"
        }
        setError(errors)

        if (Object.keys(errors).length === 0) {
            return true
        }
        else {
            return false
        }
    }
    const obj = { ...user, basic: data }

    const handleSubmit = () => {
        const isValid = handleValidation()

        if (isValid) {
            dispatch(addBasicInfo(obj))
            navigate('/contact_info')
        }
    }

    return (
        <div className="relative">
            <img src="../img/Rectangle 419.png" className='absolute top-0 z-0' alt="here are" />
            <div className="flex flex-col justiify-center items-center pt-10">
                <h1 className='text-center relative text-white text-[48px] font-bold'>Step 1: {stepper[0]}</h1>
                <p className='text-center relative text-white lg:w-[679px] text-2xl'>Let’s get to know you, please fill out some basic information about yourself.</p>
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
                            <label>First Name<span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12'
                                name="f_name"
                                onChange={handleData}
                                placeholder='enter your first name' />
                            {error && <span className='left-0 truncate italic text-red-500 text-xs absolute -bottom-4'>{error.fname}</span>}
                        </div>
                        <div className='flex flex-col relative'>
                            <label>Last Name<span className='text-red-500'>*</span></label>
                            <input type="text"
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12'
                                name="l_name"
                                onChange={handleData}
                                placeholder='enter your last name' />
                            {error && <span className='left-0 truncate italic text-red-500 text-xs absolute -bottom-4'>{error.lname}</span>}
                        </div>
                        <div className='flex flex-col relative'>
                            <label>Date of Birth<span className='text-red-500'>*</span></label>
                            <input
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12'
                                type="date"
                                onChange={handleData}
                                name="dob" />
                            {error && <span className='left-0 truncate italic text-red-500 text-xs absolute -bottom-4'>{error.dob}</span>}
                        </div>
                        <div className='flex flex-col relative'>
                            <label>Degre Level<span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                name="degree"
                                onChange={handleData}
                                placeholder='enter your degree'
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12' />
                            {error && <span className='left-0 truncate italic text-red-500 text-xs absolute -bottom-4'>{error.degree}</span>}
                        </div>
                        <div className='justify-self-start px-6'>
                            <p className='mb-4'>Gender</p>
                            <input
                                type="radio"
                                name="gender"
                                onChange={handleData}
                                value='male'
                                checked={gender === 'male'}
                                className='mr-2 accent-[#635EA3] '
                                id="male" />
                            <label className='mr-5' htmlFor="male">Male</label>
                            <input
                                type="radio"
                                name="gender"
                                onChange={handleData}
                                value='female'
                                checked={gender === "female"}
                                className='mr-2 accent-[#635EA3]'
                                id="female" />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className=' pt-44 flex justify-center items-center'>
                        <button className='btn text-white rounded-xl px-[148.86px] py-[15px] text-sm leading-6 capitalize'
                            onClick={handleSubmit}>Next</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Step1Form;
