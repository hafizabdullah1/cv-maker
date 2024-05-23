import React from 'react';

function NavBar() {
  return (
    <div className='pt-6'>
      <nav className='flex flex-col lg:flex-row justify-between items-center text-center max-w-[1371px] border border-blue-500 px-4 lg:px-12 py-3'>
        <img src="../img/image 1.png" alt="" className='mb-4 lg:mb-0' />
        <div className='flex flex-col lg:flex-row items-center'>
          <button className='border-2 py-2 px-4 lg:py-3 lg:px-6 mb-2 lg:mb-0 capitalize rounded-xl hover:bg-[#635EA3] hover:text-white border-[#635EA3] text-[#635EA3]'>
            Create Profile
          </button>
          <button className='mx-0 lg:mx-4 py-2 lg:py-3.5 rounded-xl bg-[#635EA3] capitalize text-white px-4 lg:px-6'>
            Employer
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
