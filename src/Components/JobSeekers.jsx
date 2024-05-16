import React from 'react'

function JobSeekers() {
    return (
        <div className='flex py-[155px] pl-16 gap-52 relative'>
            <div>
                <img src="../img/Frame.png" alt="frame" />
            </div>
            <div>
                <h2 className='text-4xl font-bold text-[#373737] my-14'>Job Seekers</h2>
                <ul className='w-56'>
                    <li className='mt-9'>
                        <span className='inline-block border-t-2 border-[#635AE3]'>Apply</span> for a job with one click after completing your profile
                    </li>
                    <li className='mt-9'>
                        <span className='inline-block border-t-2 border-[#635AE3]'>Free</span> CV templates- Many to choose from
                    </li>
                    <li className='mt-9'>
                        <span className='inline-block border-t-2 border-[#635AE3]'>Free</span> exports to pdf
                    </li>
                    <li className='mt-9'>
                        <span className='inline-block border-t-2 border-[#635AE3]'>Free</span> profile and access to jobs
                    </li>
                </ul>
            </div>
            <img src="../img/Group 237838.png" className='absolute right-0' alt="here are" />
        </div>
    )
}

export default JobSeekers
