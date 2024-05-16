import React from 'react'

function UserHeader() {

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <header className='user_header flex justify-between items-center px-16 py-4'>
        <img src="../img/image 1.png" alt="" />
        <div className='flex gap-5 items-center'>
            <img height='70px' width='70px' className='rounded-full' src={user.image ? user.image : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="} alt="" />
            <h3 className='text-sm font-semibold capitalize'>{user.basic?.f_name} {user.basic ? user.basic.l_name: user.name }</h3>
        </div>
    </header>
  )
}

export default UserHeader
