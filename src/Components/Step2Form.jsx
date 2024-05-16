import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBasicInfo } from '../Actions/action'

function Step2Form() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const stepper = ["Basic Information", "Contact Information", "Experience", "Complete your profile"]
    const [currentStep, setcurrentStep] = useState(2)
    const [data, setData] = useState({})

    const { email, home_no, mobile, country, address_line1, address_line2, city, zip_code } = data
    const user = JSON.parse(localStorage.getItem('user'))

    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const [error, setError] = useState()

    const errors = {}
    const handleValidation = () => {

        if (!email) {
            errors.email = "email is required"
        }
        if (!city) {
            errors.city = "city is required"
        }
        if (!mobile) {
            errors.mobile = "mobile no is required"
        }
        if (!country) {
            errors.country = "country is required"
        }
        if (!address_line1) {
            errors.address_line1 = "address is required"
        }
        setError(errors)

        if (Object.keys(errors).length === 0) {
            return true
        }
        else {
            return false
        }
    }
    const obj = { ...user, contact: data }

    const handleSubmit = () => {
        const isValid = handleValidation()

        if (isValid) {
               dispatch(addBasicInfo(obj))
               navigate('/experience')
        }
    }

    return (
        <div className="relative">
            <img src="../img/Rectangle 419.png" className='absolute top-0 z-0' alt="here are" />
            <div className="flex flex-col justiify-center items-center pt-10">
                <h1 className='text-center relative text-white text-[48px] font-bold'>Step 2: {stepper[1]}</h1>
                <p className='text-center relative text-white lg:w-[679px] text-2xl'>How can we get in touch with you about the job of your dreams</p>
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
                            <label>Email<span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12'
                                name="email"
                                value={email}
                                onChange={handleData}
                                placeholder='example123@gmail.com' />
                            {error && <span className='left-0 truncate italic text-red-500 text-xs absolute -bottom-4'>{error.email}</span>}
                        </div>
                        <div className='flex flex-col relative'>
                            <label>Home Contact No</label>
                            <input type="number"
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12'
                                name="home_no"
                                value={home_no}
                                onChange={handleData}
                                placeholder='enter your home contact' />
                        </div>
                        <div className='flex flex-col relative'>
                            <label>Mobile<span className='text-red-500'>*</span></label>
                            <input
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12'
                                type="number"
                                value={mobile}
                                onChange={handleData}
                                placeholder='enter your mobile no'
                                name="mobile" />
                            {error && <span className='left-0 truncate italic text-red-500 text-xs absolute -bottom-4'>{error.mobile}</span>}
                        </div>
                        <div className='flex flex-col relative'>
                            <label>Country<span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                name="country"
                                value={country}
                                onChange={handleData}
                                placeholder='enter your contry name'
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12' />
                            {error && <span className='left-0 truncate italic text-red-500 text-xs absolute -bottom-4'>{error.country}</span>}
                        </div>
                        <div className='flex flex-col relative'>
                            <label>Address Line 1<span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                name="address_line1"
                                value={address_line1}
                                onChange={handleData}
                                placeholder='address Line 1'
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12' />
                            {error && <span className='left-0 truncate italic text-red-500 text-xs absolute -bottom-4'>{error.address_line1}</span>}
                        </div>
                        <div className='flex flex-col relative'>
                            <label>City<span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                name="city"
                                value={city}
                                onChange={handleData}
                                placeholder='enter your city'
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12' />
                            {error && <span className='left-0 truncate italic text-red-500 text-xs absolute -bottom-4'>{error.city}</span>}
                        </div>
                        <div className='flex flex-col relative'>
                            <label>Address Line 2</label>
                            <input
                                type="text"
                                name="address_line2"
                                value={address_line2}
                                onChange={handleData}
                                placeholder='address Line 2'
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12' />
                        </div>
                        <div className='flex flex-col relative'>
                            <label>Zip Postal Code</label>
                            <input
                                type="number"
                                name="zip_code"
                                value={zip_code}
                                onChange={handleData}
                                className='capitalize mt-1 rounded-xl border pl-4 placeholder:capitalize lg:w-80 lg:h-12' />
                        </div>
                        <div className=' pt-12 flex flex-col'>
                            <button className=' text-[#635AE3] border border-[#635AE3] rounded-xl px-[148.86px] py-[15px] text-sm leading-6 capitalize'
                                onClick={() => { navigate('/basic_info') }}>Previous</button>
                        </div>
                        <div className='pt-12 flex justify-center items-center gap-2'>
                            <button className='btn text-white  rounded-xl px-[148.86px] py-[15px] text-sm leading-6 capitalize'
                                onClick={handleSubmit}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Step2Form;
