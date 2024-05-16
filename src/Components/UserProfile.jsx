import React, { useEffect, useRef, useState } from 'react'
import { getUser } from '../Actions/action'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PopupComponent from '../Components/PopupComponent'


function UserProfile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const [popup, setPopup] = useState(false)
  const [value, setValue] = useState("")
  
  useEffect(() => {
    dispatch(getUser(id))
  }, [id, popup])

  const { data } = useSelector((state) => state.user)

  const handlePopup = (e) => {
    setPopup(true)
    setValue(e.target.value)
  }

  const skillsName = data?.skills?.name.split(",")
  const skillsPercentage = data?.skills?.percentage.split(",")

  const strength = data ?  Object.keys(data).length * 5 : 0
 
  let progressBar = useRef()

  if(data && progressBar.current){
    progressBar.current.style.background = `conic-gradient(
      #635EA3 ${strength * 3.6}deg, #DDDDDD ${strength * 3.6}deg
    )`
  }

  return (
    <div>
      {
        data ? (
          <div className='flex flex-col flex-wrap items-center md:items-start md:justify-center md:flex-row w-full px-0 py-6 sm:p-10  gap-5 bg-white'>
            <div className='bg-white box_shadow rounded-xl py-10 px-8 max-w-xs'>
              <div className="flex flex-col justify-center items-center w-full gap-3">
                <div className='md:h-40 md:w-40 h-[120px] w-[120px] rounded-full overflow-hidden'>
                  <img src={data.image ? data.image : 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='} alt="" />
                </div>
                <h3 className='capitalize font-semibold md:text-lg'>{data.basic.f_name ? data.basic.f_name : ''}&nbsp;{data.basic.l_name ? data.basic.l_name : ''}</h3>
                <p className='capitalize text-[#767676] text-base font-normal'>{data.experience ? data.experience.expected_designation : ''}</p>
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
                <li className='my-4 flex flex-wrap justify-between'>
                  <p><i className="text-xs fa-solid fa-user"></i> &nbsp; Basic Information</p>
                  <button className='text-blue-600 cursor-pointer'
                    onClick={handlePopup}
                    value='basic'
                  >Edit</button>
                  {data.basic ? (
                    <ul className='w-full mt-3'>
                      <li className='text-[#767676] capitalize'><b className='text-[#373737]'>First Name:</b> {data.basic.f_name}</li>
                      <li className='text-[#767676] capitalize'><b className='text-[#373737]'>Last Name:</b> {data.basic.l_name}</li>
                      <li className='text-[#767676] capitalize'><b className='text-[#373737]'>DOB:</b> {data.basic.DOB}</li>
                      {/* <li className='text-[#767676] capitalize'><b className='text-[#373737]'>degree:</b> {data.basic.degree  }</li> */}
                      <li className='text-[#767676] capitalize'><b className='text-[#373737]'>Gender:</b> {data.basic.gender}</li>
                    </ul>
                  ) : ""}
                </li>
                <li className='my-4 flex justify-between'>
                  <p><i className="text-xs fa-regular fa-envelope"></i> &nbsp; Credentials</p>
                  <button className='text-blue-600 cursor-pointer'
                    onClick={handlePopup}
                    value='credentials'
                  >Edit</button>
                </li>
                <li className='my-4 flex flex-wrap justify-between'>
                  <p><i className="text-xs fa-solid fa-link"></i> &nbsp; Public Link</p>
                  <button className='text-blue-600 cursor-pointer'
                    value='profilelink'
                    onClick={handlePopup}
                  >Edit</button>
                  <p className='text-[#767676] mt-2 text-xs w-full pl-5'>{data.profilelink ? data.profilelink.link : `https:localhost:3000/user/${data.id}`}</p>
                </li>
                <li className='my-4 flex flex-wrap justify-between'>
                  <p><i className="text-xs fa-solid fa-graduation-cap"></i> &nbsp; Education</p>
                  <button className='text-blue-600 cursor-pointer'
                    value='education'
                    onClick={handlePopup}
                  >Add</button>
                  {data.education ? (
                    <ul className='w-full mt-3'>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Degree Level:</b> {data.education.degreelevel}</li>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Institute:</b> {data.education.institute}</li>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Completion Year:</b> {data.education.yearcompletion}</li>
                      <li className='text-[#767676]'><b className='text-[#373737]'>CGPA / Percentage:</b> {data.education.cgpa_percentage}{data.education.result == "percentage" ? "%" : ""}</li>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Location:</b> {data.education.location}</li>
                    </ul>
                  ) : ""}
                </li>
                <li className='my-4 flex flex-wrap justify-between'>
                  <p><i className="text-xs fa-regular fa-circle-check"></i> &nbsp; Industry</p>
                  <button className='text-blue-600 cursor-pointer'
                    onClick={handlePopup}
                    value='industry'
                  >Add</button>
                  {data.industry ? (
                    <p className='text-[#767676] mt-2 text-xs w-full pl-5'> {data.industry.industry}</p>
                  ) : ""}

                </li>
                <li className='my-4 flex flex-wrap justify-between'>
                  <p><i className="text-xs fa-solid fa-trophy"></i> &nbsp; Awards</p>
                  <button className='text-blue-600 cursor-pointer'
                    value='awards'
                    onClick={handlePopup}
                  >Add</button>
                  {data.awards ? (
                    <ul className='w-full mt-3'>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Title:</b> {data.awards.title}</li>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Authority:</b> {data.awards.authority}</li>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Date:</b> {data.awards.date}</li>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Award Url:</b> {data.awards.award_url}</li>
                    </ul>
                  ) : ""}
                </li>
              </ul>
            </div>
            <div className='px-10 py-4 sm:w-1/2'>
              <div className="flex flex-col items-center md:items-start gap-3 mb-4">
                <h1 className='font-semibold md:text-lg text-center'>Already Have a Resume?</h1>
                <button className="btn truncate text-white px-16 sm:px-24 rounded-lg py-2 text-xs md:mt-3 md:mb-8">Upload File</button>
              </div>
              <ul className='text-xs md:text-base 2xl:text-lg text-[#373737]'>
                <li className="flex flex-wrap border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                  <p><i className="text-xs fa-regular fa-file-lines"></i>&nbsp; Summary</p>
                  <button className='text-blue-600 cursor-pointer'
                    value='summary'
                    onClick={handlePopup}
                  >Edit</button>
                  <p className='text-[#767676] w-full mt-2 text-base'>{data.summary ? data.summary.summary : `Hello..My name ${data.basic.f_name} ${data.basic.l_name} and I'm a Software Engineer.`}</p>
                </li>
                <li className="flex flex-wrap border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                  <p><i className="text-xs fa-solid fa-rotate-left"></i>&nbsp; Work History</p>
                  <button className='text-blue-600 cursor-pointer'
                    value='workhistory'
                    onClick={handlePopup}
                  >Add</button>
                  {data.workhistory ? (
                    <ul className='w-full mt-3'>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Job Title:</b> Senior Software Engneer/Developer</li>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Company:</b> {data.workhistory.company}</li>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Duration:</b> {data.workhistory.fromdate} To {data.workhistory.presentdate}</li>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Description:</b> {data.workhistory.remarks}</li>

                      <li className='text-[#767676]'><b className='text-[#373737]'>Designation:</b> {data.workhistory.designation}</li>
                    </ul>
                  ) : ""}
                </li>
                <li className="flex flex-wrap border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                  <p><i className="text-xs fa-regular fa-folder"></i>&nbsp; Project</p>
                  <button className='text-blue-600  cursor-pointer'
                    value='project'
                    onClick={handlePopup}
                  >Add</button>
                  {data.project ? (
                    <ul className='w-full mt-3'>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Project Title:</b> {data.project.projecttitle}</li>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Company:</b> {data.project.company}</li>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Project URL:</b> {data.project.fromdate} To {data.project.presentdate} </li>
                      <li className='text-[#767676]'><b className='text-[#373737]'>Tools:</b> {data.project.tool}</li>
                    </ul>
                  ) : ""}
                </li>
                <li className="flex flex-wrap border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                  <p><i className="text-xs fa-brands fa-galactic-republic"></i>&nbsp; Certifications</p>
                  <button className='text-blue-600 cursor-pointer'
                    value='certifications'
                    onClick={handlePopup}
                  >Add</button>
                </li>
                <li className="flex flex-wrap border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                  <p><i className="text-xs fa-solid fa-chart-simple"></i>&nbsp; Skills</p>
                  <button className='text-blue-600 justify-between cursor-pointer'
                    value='skills'
                    onClick={handlePopup}
                  >Add</button>
                      <div className='flex w-full flex-wrap justify-between gap-2 md:gap-4 '>
                    {data.skills ? (
                      skillsName.map((ele,i)=>(
                        <div className='w-44 2xl:w-full' key={i}>
                          <div className='flex justify-between pb-1 pt-3 text-[#767676]'>
                            <p>{ele}</p>
                            <p>{skillsPercentage[i]}%</p>
                          </div>
                          <div style={{"MozAnimation":""}} 
                        className={`overflow-hidden h-1 relative outline outline-offset-1 rounded-lg`}>
                            <div style={{width : `${skillsPercentage[i]}%`}} className="skillAfter rounded-lg border absolute bg-[#635EA3] h-full">
                            </div>  
                          </div>
                        </div>
                      ))
                    ) : ""}
                    </div>
                </li>
                <li className="flex flex-wrap border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                  <p><i className="text-xs fa-solid fa-location-dot"></i>&nbsp; Preferred Job City</p>
                  <button className='text-blue-600  cursor-pointer'
                    onClick={handlePopup}
                    value='Preferred_job_city'
                  >Add</button>
                  {data.Preferred_job_city ? (
                  <p className="w-full text text-[#767676] py-2 capitalize"><span className="py-2 text-[#373737]">City: </span>
                    {data.Preferred_job_city.city}</p>
                    ) : ""}
                </li>
                <li className="flex flex-wrap border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                  <p><i className="text-xs fa-solid fa-futbol"></i>&nbsp; Hobbies/Activites</p>
                  <button className='text-blue-600  cursor-pointer'
                    onClick={handlePopup}
                    value='hobbies'
                  >Add</button>
                 {data.hobbies ? (
                  <p className="w-full text text-[#767676] py-2 capitalize">{data.hobbies.hobby}</p>) : ""}
                </li>
                <li className="flex flex-wrap border-b  justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                  <p><i className="text-xs fa-solid fa-globe"></i>&nbsp; Languages</p>
                  <button className='text-blue-600  cursor-pointer'
                    onClick={handlePopup}
                    value='languages'
                  >Add</button>
                  <ul className='w-full pt-2'>
                    <li className='text-[#767676]'>
                      <b className='text-[#373737]'>English:</b> Native</li>
                    <li className='text-[#767676]'>
                      <b className='text-[#373737]'>Urdu:</b> Beginner</li>
                  </ul>
                </li>
                <li className="flex flex-wrap border-b justify-between pb-1 sm:pb-2 mb-2 md:mb-4">
                  <p><i className="text-xs fa-solid fa-virus-covid"></i>&nbsp; References</p>
                  <button className='text-blue-600 cursor-pointer'
                    onClick={handlePopup}
                    value='reference'
                  >Add</button>
                 {data.reference ? (
                   <ul className='w-full pt-2'>
                   <li className='text-[#767676]'>
                     <b className='text-[#373737]'>Name:</b> {data.reference.name}</li>
                   <li className='text-[#767676]'>
                     <b className='text-[#373737]'>Company:</b> {data.reference.company}</li>
                   <li className='text-[#767676]'>
                     <b className='text-[#373737]'>Email:</b> {data.reference.email}</li>
                   <li className='text-[#767676]'>
                     <b className='text-[#373737]'>Contact No:</b> {data.reference.contact_no}</li>
                 </ul>
                 ) : ""}
                </li>
              </ul>
            </div>
            <div className='p-4 h-fit bg-white box_shadow rounded-xl flex flex-col items-center md:self-start'>
              <h3 className='mb-4 font-smeibold text-lg'><i className="text-xs fa-solid fa-user"></i> Profile Strength</h3>
              <div className="chart mb-8" ref={progressBar}>
                    <h1>{strength}%</h1>
              </div>
              <button className='text-[#635EA3] hover:text-white hover:bg-[#635EA3]  border border-[#635EA3] px-20 text-xs w-full rounded-lg py-2.5'
                onClick={()=>{navigate(`/cv`)}}
              >Download CV</button>
            </div>
            <PopupComponent state={popup} setPopup={setPopup} value={value} />
          </div>
        ) : ('loading...')
      }
    </div>
  )
}

export default UserProfile
