import React from 'react'

function UserProfiles() {
    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold text-center mt-[155px] mb-[60px]'>User profiles</h1>
            <div className='flex gap-[185px] justify-center'>

                {Array(5).map((_, i) => (
                    <ul key={i}>
                        <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                        <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                        <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                        <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                        <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                    </ul>
                ))}
                {/*
            <ul>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
            </ul>
            <ul>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
            </ul>
            <ul>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
                <li className='leading-6 flex gap-4'><img src="../img/Avatar.png" alt="" /> John Doe</li>
            </ul> */}
            </div>
        </div>
    )
}

export default UserProfiles
