import React from 'react'
import { Link } from "react-router-dom"
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { FaDownload } from "react-icons/fa6";


function Home() {
  return (
  <>
  
  <div className="container px-[15px] pb-[60px]">
       <div className="personal_info px-[30px] py-10 flex flex-wrap flex-col items-center">
          <div className=" image mb-[21px]">
            
            <img className="w-[280px] h-[280px] rounded-full" src="images/profile2.png" alt="profile" />
          </div>
          <div className="info flex flex-col items-center flex-wrap">
            <h4><Link className="text-[26px] font-medium text-black mb-2" to='#'>Alomgir Miah</Link></h4>
            <span className="text-[14px] text-[#7b7b7b] font-poppins font-medium px-5 py-1 mb-[15px]">Ui/Ux Designer</span>
            <ul className="flex flex-wrap gap-1 mb-[30px]">
              <li><Link className=" w-10 h-10 m-1 bg-[#f3f6f6] text-[18px] text-[#1773ea] flex justify-center items-center rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white rounded :hover-bg scale-110" to='#'><GrFacebookOption /></Link></li>
              <li><Link className=" w-10 h-10 m-1 bg-[#f3f6f6] text-[18px] text-[#1c9cea] flex justify-center items-center rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white rounded :hover-bg scale-110" to='#'><FaTwitter /></Link></li>
              <li><Link className=" w-10 h-10 m-1 bg-[#f3f6f6] text-[18px] text-[#e12a72] flex justify-center items-center rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white rounded :hover-bg scale-110" to='#'><FaInstagram /></Link></li>
              <li><Link className=" w-10 h-10 m-1 bg-[#f3f6f6] text-[18px] text-[#144679] flex justify-center items-center rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white rounded :hover-bg scale-110" to='#'><FaLinkedinIn /></Link></li>
            </ul>
            <div className="DownloadBtn">
            <Link className="flex justify-center items-center gap-[5px] px-[30px] py-3 text-[18px] text-[#F3F6F6] font-poppins font-normal bg-gradient-to-r from-[#FA5252] to-[#DD2476] border-transparent border-[1px] border-solid rounded-[30px] backdrop-hue-rotate-60 active:scale-y-110" to='#'><FaDownload /> <span>Download Cv</span></Link>

            </div>
          </div>
       </div>
    </div>
  
  </>
  )
}

export default Home





















{/* <div className="infoBtn">
              <Link className="flex justify-center items-center gap-[5px] px-[30px] py-3 text-[18px] text-[#F3F6F6] font-poppins font-normal bg-gradient-to-r from-[#FA5252] to-[#DD2476] border-transparent border-[1px] border-solid rounded-[30px]" to='#'><FaDownload /> <span>Download Cv</span></Link>
            </div> */}