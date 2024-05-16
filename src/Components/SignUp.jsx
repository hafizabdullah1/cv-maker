import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, getData } from '../Actions/action';

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({})

  const handleSignUp = (e) => {
    setUser({
      ...user, [e.target.name]: e.target.value
    })
  }

  const { name, email, phone, image, password } = user;

  const [error, setError] = useState()
  const errors = {}
  const handleValidation = () => {

    if (!name) {
      errors.name = "name is required"
    }
    if (!email) {
      errors.email = "email is required"
    }
    if (!password) {
      errors.password = "password is required"
    }
    if (!phone) {
      errors.phone = "phone no is required"
    }
    if (!image) {
      errors.image = "image url is required"
    }

    setError(errors)

    if (Object.keys(errors).length === 0) {
      return true
    }
    else {
      return false
    }
  }


  const { data } = useSelector((state) => state?.storeData)

  useEffect(() => {
    dispatch(getData())
  }, [])

  const handleExist = () => {
    const emailExists = data?.some((ele) => ele.email == email);

    if (emailExists) {
      setError(error.email = 'This email already exists')
      alert('This email already exist please login \n OR try with another email address')
    }
    else {
      dispatch(addUser(user));
      navigate('/signIn')
    }
  };

  const handleSubmit = () => {
    const isValid = handleValidation();
    if (isValid) {
      setTimeout(() => {
        handleExist()
      }, 0.1);
    }
  }
  return (
    <div className='w-full mx-auto mt-5 py-3 flex'>
      <div className='absolute'>
        <svg xmlns="http://www.w3.org/2000/svg" width="335" height="454" viewBox="0 0 335 454" fill="none">
          <g opacity="0.05" filter={`url(#filter0_f_15_1656_${Date.now()})`}>
            <path d="M108 427C218.457 427 308 337.457 308 227C308 116.543 218.457 27 108 27C-2.45695 27 -92 116.543 -92 227C-92 337.457 -2.45695 427 108 427Z" fill="#635EA3" />
          </g>
          <defs>
            <filter id={`filter0_f_15_1656_${Date.now()}`} x="-119" y="0" width="454" height="454" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="13.5" result="effect1_foregroundBlur_15_1656" />
            </filter>
          </defs>
        </svg>
      </div>
      <img src="../img/Ellipse 6 (Stroke).png" className=' mt-10 h-44' alt="" />
      <div className='pt-[103px] mx-10'>
        <h1 className='text-6xl leading-[76px] font-extrabold w-[613px]'>Find Your <span className='text-[#635EA3]'>Blockchain Dev</span> Job Today</h1>
        <p className='text-2xl w-[519px] mt-7 text-[#767676]'>Discover the leading companies in the blockchain industry and find job opportunities.</p>
        <button className='text-white btn mt-8 rounded-xl px-[148.86px] py-[15px] text-sm leading-6 capitalize'
          onClick={() => { navigate('/SignIn') }}
        >login now</button>
      </div>
      <div className='pt-[103px] px-24 relative pb-6'>

        <div style={{ "boxShadow": "0px 10px 40px 0px #8552E51A" }} className='bg-white max-h-[598px] max-w-[432px] relative z-10 left-8 rounded-xl'>
          <div className='flex pt-8 px-12'>
            <h2 className='font-extrabold text-2xl uppercase mr-8 tracking-wider'>sign up</h2>
            <button className='text-sm font-bold border border-[#635AE3] px-3 text-white capitalize bg-[#635AE3] rounded-l-md'>job seeker</button>
            <button className='text-sm font-bold border border-[#635AE3] px-3 rounded-r-md text-[#767676] capitalize '>employer</button>
          </div>
          <div className='px-12 py-3'>
            <div className='mb-4 relative'>
              <label className='block font-normal text-sm tracking-wide w-11 mb-2'>Name<span className='text-red-500'>*</span></label>
              <input
                className='w-[323px] pl-5 h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border'
                type="text"
                placeholder='Enter Name'
                name="name"
                onChange={handleSignUp}
                value={name}
              />
              {error && <span className="text-red-500 text-xs italic absolute  left-3 -bottom-4">{error.name}</span>}
            </div>
            <div className='mb-4 relative'>
              <label className='block font-normal text-sm tracking-wide w-11 mb-2'>Email<span className='text-red-500'>*</span></label>
              <input
                className='w-[323px] pl-5 h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border'
                type="text"
                placeholder='Enter Email'
                name="email"
                onChange={handleSignUp}
                value={email}
              />
              {error && <span className="text-red-500 text-xs italic absolute  left-3 -bottom-4">{error.email}</span>}
            </div>
            <div className='mb-4 relative'>
              <label className='block font-normal text-sm tracking-wide w-11 mb-2 truncate'>Phone No<span className='text-red-500'>*</span></label>
              <input
                className='w-[323px] pl-5 h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border'
                type="number"
                placeholder='Enter Phone No'
                name="phone"
                onChange={handleSignUp}
                value={phone}
              />
              {error && <span className="text-red-500 text-xs italic absolute  left-3 -bottom-4">{error.phone}</span>}
            </div>
            <div className='mb-4 relative'>
              <label className='block font-normal text-sm tracking-wide w-11 mb-2 truncate'>Image<span className='text-red-500'>*</span></label>
              <input
                className='w-[323px] pl-5 h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border'
                type="text"
                placeholder='Enter Image URL'
                name="image"
                onChange={handleSignUp}
                value={image}
              />
              {error && <span className="text-red-500 text-xs italic absolute  left-3 -bottom-4">{error.image}</span>}
            </div>
            <div className='mb-4 relative'>
              <label className='block font-normal text-sm tracking-wide w-11 mb-2 '>Password<span className='text-red-500'>*</span></label>
              <input
                className='w-[323px] pl-5 h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border'
                type="password"
                placeholder='Enter Password'
                name="password"
                onChange={handleSignUp}
                value={password}
              />
              {error && <span className="text-red-500 text-xs italic absolute left-3 -bottom-4">{error.password}</span>}
            </div>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <button className='text-center btn text-white w-[323px] py-3.5 rounded-xl'
              onClick={handleSubmit}
            >Register Now</button>
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

        <img src="../img/Ellipse 2.png" className='w-[683px] absolute bottom-0 right-0' alt="" />
      </div>
    </div>
  )
}

export default SignUp
