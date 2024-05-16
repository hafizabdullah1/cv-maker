import React, { useEffect } from 'react'
import { getUser } from '../Actions/action'
import { useDispatch, useSelector } from 'react-redux'

function CvPdf() {

    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser(user.id))
    }, [user.id])

    const { data } = useSelector((state) => state.user)

    const skillsName = data?.skills?.name.split(",")
    const skillsPercentage = data?.skills?.percentage.split(",")


    return (
        <>
            {data ? (
                <main className='bg-red-500 px-24 '>
                    <div className='py-6 border bg-[#635EA3] flex'>
                        <div >
                            <div className='flex'>
                                <img
                                    className='h-40 w-40 rounded-full'
                                    src={data.avatar ? data.avatar : "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_640.png"} alt="" />
                                <h1>{data.basic.f_name} {data.basic.l_name}</h1>
                            </div>
                            <p>{data.summary ? data.summary.summary : ""}</p>
                        </div>
                        <div>
                            <h1>Contact Info</h1>
                            <ul>
                                <li>{data.phone}</li>
                                <li>{data.email}</li>
                                <li>{data.contact.city}, {data.contact.country}</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1> Strengths & Skills</h1>
                        <div className="flex flex-wrap gap-x-40 gap-y-6">
                            {data.skills ? (
                                skillsName.map((ele, i) => (
                                    <div className='w-44 2xl:w-full' key={i}>
                                        <div className='flex justify-between pb-1 pt-3 text-[#767676]'>
                                            <p>{ele}</p>
                                            <p>{skillsPercentage[i]}%</p>
                                        </div>
                                        <div style={{ "MozAnimation": "" }}
                                            className={`overflow-hidden h-1 relative outline outline-offset-1 rounded-lg`}>
                                            <div style={{ width: `${skillsPercentage[i]}%` }} className="skillAfter rounded-lg border absolute bg-[#635EA3] h-full">
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : ""}
                        </div>
                    </div>
                    <div>
                        <h1> Academics</h1>

                        <div className="grid grid-cols-6 grid-rows-2 gap-4">
                            <div className="col-span-2">Title</div>
                            <div className="col-span-2 col-start-3">Institute</div>
                            <div className="col-start-5">Score</div>
                            <div className="col-start-6">Date</div>
                            <div className="col-span-2 row-start-2">{data.education.degreetitle ? data.education.degreetitle:""}</div>
                            <div className="col-span-2 col-start-3 row-start-2">{data.education.institute ? data.education.institute:""}</div>
                            <div className="col-start-5 row-start-2">
                            {data.education.cgpa_percentage}{data.education.result == "percentage" ? "%" : ""} 
                            </div>
                            <div className="col-start-6 row-start-2">
                                {data.education.yearcompletion ? data.education.yearcompletion : "" }
                            </div>
                        </div>
                        

                    </div>
                </main>
            ) : (
                <p className='text-center py-5'>Loading...</p>
            )}
        </>
    )
}

export default CvPdf