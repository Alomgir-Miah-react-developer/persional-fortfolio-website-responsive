import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";










function Navber() {


  const[show , setShow]= useState(false)
  const handelshow=()=>{
    setShow(!show)
  }

  return (
   <nav>
     <div className='container'>
        <div className="menu_row p-5 flex justify-between flex-wrap">
        <div className="logo_col">
           <Link to="#"><img src="images/logo1.png" alt="logo" /></Link>
        </div>
        <div className='menu_col relative'>
          <FaBars onClick={handelshow} className=' text-xl md:hidden' />

         {
          show &&
          <ul className=' flex flex-col items-center rounded-xl w-[150px] p-5 absolute top-[50px] right-0 bg-[#D8EFD3] '>
          <li><NavLink className=' text-xl font-poppins text-black' to="/"></NavLink>Home</li>
          <li><NavLink className=' text-xl font-poppins text-black' to="/"></NavLink>Home</li>
          <li><NavLink className=' text-xl font-poppins text-black' to="/"></NavLink>Home</li>
          <li><NavLink className=' text-xl font-poppins text-black' to="/"></NavLink>Home</li>
          <li><NavLink className=' text-xl font-poppins text-black' to="/"></NavLink>Home</li>
          </ul>
          
         }
         <div className='hidden md:block'>
         <ul className=' flex gap-5'>
          <li><NavLink className=' text-xl font-poppins text-black' to="/"></NavLink>Home</li>
          <li><NavLink className=' text-xl font-poppins text-black' to="/"></NavLink>Home</li>
          <li><NavLink className=' text-xl font-poppins text-black' to="/"></NavLink>Home</li>
          <li><NavLink className=' text-xl font-poppins text-black' to="/"></NavLink>Home</li>
          <li><NavLink className=' text-xl font-poppins text-black' to="/"></NavLink>Home</li>
          </ul>
         </div>

        </div>
         
        </div>
      
      </div>
   </nav>
  )
}

export default Navber



{/* <div className="menuBtn ml-[30px] justify-center items-center ">
                 <div className="w-[45px] h-[45px] text-[22px] bg-white flex justify-center items-center rounded-3xl text-[#446c6a] shadow-6xl hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white">
                  <BsMoon />
                </div>
              </div> */}