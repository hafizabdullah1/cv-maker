import React, {useState, useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {getData } from '../Actions/action'

function SignIn() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data } = useSelector((state)=> state?.storeData)

  useEffect(()=>{
    dispatch(getData())
  },[])



  const [loginValue, setLoginValue] = useState({})

  const {loginEmail, loginPassword} = loginValue

  const handleLoginValue = (e)=>{
      setLoginValue({...loginValue, [e.target.name] : e.target.value})
  }


  const [error, setError] = useState()
    const errors = {}
    const handleValidation=()=>{

     const checkUser = data?.some((ele)=> ele.email === loginEmail && ele.password === loginPassword) 

        if(!loginEmail){
            errors.email = "email is required"
        }
        if(!loginPassword){
            errors.password = "password is required"
        }
        if(loginPassword && checkUser == false){
          errors.password = "incorrect password or email"
      }
        setError(errors)

        if(Object.keys(errors).length === 0){
            return true
        }
          else{
            return false
        }
}


const handleCheck =()=>{
  const isValid = handleValidation()

  if(isValid){
     const userObj = data?.find((user)=> user.email === loginEmail)

     if (userObj) {
        localStorage.setItem('user', JSON.stringify(userObj))
        if(userObj.basic && !userObj.contact && !userObj.experience){
            navigate('/contact_info')
        }
        if(userObj.basic && userObj.contact && !userObj.experience){
            navigate('/experience')
        }
        if(userObj.basic && userObj.contact && userObj.experience){
            navigate(`/user/${userObj.id}`)
        }
        else{
            navigate('/basic_info')
        }
      }
      else{
          document.getElementById('server_error').style.display='flex'
          document.getElementById('sign_in').style.display='none'
      }
  }
}

  return (
    <div className='w-full mt-5 py-3 flex'>
      <div className='absolute'>
        <svg xmlns="http://www.w3.org/2000/svg" width="335" height="454" viewBox="0 0 335 454" fill="none">
          <g opacity="0.05" filter="url(#filter0_f_15_1656)">
            <path d="M108 427C218.457 427 308 337.457 308 227C308 116.543 218.457 27 108 27C-2.45695 27 -92 116.543 -92 227C-92 337.457 -2.45695 427 108 427Z" fill="#635EA3" />
          </g>
          <defs>
            <filter id="filter0_f_15_1656" x="-119" y="0" width="454" height="454" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
            onClick={()=>{navigate('/')}}
        >Sign Up Now</button>
      </div>
      <div className='pt-[103px] px-24 relative pb-6'>

        <div style={{"box-shadow": "0px 10px 40px 0px #8552E51A"}} className='bg-white max-h-[598px] max-w-[432px] relative z-10 left-8 rounded-xl'>
          <div className='flex pt-8 px-12'>
            <h2 className='font-extrabold text-2xl uppercase mr-8 tracking-wider'>Login</h2>
            <button className='text-sm font-bold border border-[#635AE3] px-3 text-white capitalize bg-[#635AE3] rounded-l-md'>job seeker</button>
            <button className='text-sm font-bold border border-[#635AE3] px-3 rounded-r-md text-[#767676] capitalize '>employer</button>
          </div>
          <div className='px-12 py-12'>
            <div className='mb-6 relative'>
              <label className='block font-normal text-sm tracking-wide w-11 mb-2'>Email<span className='text-red-500'>*</span></label>
              <input 
              placeholder='Enter your email' 
              type="text" 
              name='loginEmail'
              value={loginEmail}
              onChange={handleLoginValue} 
              className='pl-5 w-[323px] h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border' />
              {error && <span className='left-0 truncate italic text-red-500 text-xs absolute -bottom-4'>{error.email}</span> }
            </div>
            <div className='mb-6 relative'>
              <label className='block font-normal text-sm tracking-wide w-11 mb-2'>Password<span className='text-red-500'>*</span></label>
              <input 
              type='password'
              placeholder='Enter your password'
              name='loginPassword'
              value={loginPassword}
              onChange={handleLoginValue}
              className='pl-5 w-[323px]  h-11 rounded-xl focus:outline-[#635AE3] bg-transparent border' />
              {error && <span className='left-0 truncate italic text-red-500 text-xs absolute -bottom-4'>{error.password}</span>}
            </div>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <button className='text-center btn text-white w-[323px] py-3.5 rounded-xl' 
              onClick={handleCheck}
            >Login Now</button>
            <p className='w-[323px] relative text-center my-4 text-xs text-[#767676]'>
              <span className='before:inline-block before:content-[""] before:absolute before:h-0.5 before:w-24 before:left-0 before:top-2 before:bg-[#767676]'></span>
              or signin with
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

export default SignIn
