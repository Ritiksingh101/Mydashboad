import React from 'react'

function Header() {
  return (
    <div className='flex justify-between w-[100%] bg-white px-14 py-2 items-center' >
      <div className='flex gap-2 items-center font-bold'>
        <label>Home</label>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        <label>DashBoard v1</label>
      </div>
      <div className='flex items-center bg-blue-100 gap-2 px-2 border border-blue-400 rounded-[6px]'>
      <i class="fa fa-search" aria-hidden="true"></i>
      <input className='bg-transparent' type='text' placeholder='search anything...'></input>
      </div>
      
    </div>
  )
}

export default Header