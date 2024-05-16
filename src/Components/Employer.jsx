import React from 'react'

function Employer() {
    return (
        <div className='flex pt-[155px] relative gap-32'>
            <img src="../img/Group 237845.png" className='absolute left-0' alt="here are" />
            <div className='pl-72'>
                <h2 className='text-4xl font-bold text-[#373737] my-14'>Employers</h2>
                <ul className='w-[417px]'>
                    <li className='mt-9'>
                        <span className='inline-block border-t-2 border-[#635AE3]'>Apply</span> 
                        Free job posting
                    </li>
                    <li className='mt-9'>
                        <span className='inline-block border-t-2 border-[#635AE3]'>Free</span> 
                        View candidates before deciding which are good fit
                    </li>
                    <li className='mt-9'>
                        <span className='inline-block border-t-2 border-[#635AE3]'>Free</span> 
                       
                        One format for profile / resume makes it easier to see all the key points for evaluating a candidate within seconds
                    </li>
                </ul>
            </div>
            <div className=''>
                <img src="../img/Frame (1).png" alt="frame" />
            </div>
        </div>
    )
}

export default Employer
