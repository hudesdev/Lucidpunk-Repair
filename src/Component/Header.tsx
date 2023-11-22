import react from 'react'
import { NavLink } from 'react-router-dom'
import {FaPlus, FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa"

const Header = ()=> {
    return (
        <div className='w-full md:px-20 flex justify-center sm:pt-8'>
            <div className='w-full bg-[#292C31] h-[66px] sm:h-[86px] sm:border-2 sm:border-solid sm:border-zinc-50/[.32] sm:rounded-full flex justify-between content-center px-5 py-3.5 sm:p-5'>
                <div className='flex text-white max-[1100px]:hidden max-[1473px]:w-1/3 w-1/4 justify-between content-center pt-2'>
                    <NavLink to="/">DeFi</NavLink>
                    <NavLink to="/">Colourize</NavLink>
                    <NavLink to="/">Arm Protocol</NavLink>
                    <NavLink to="/">Winners</NavLink>
                </div>
                <div className = "w-1/2 sm:w-48 flex">
                    <img src="assets/img/logo.png" alt=""className='w-2/12 h-[32px] sm:h-[42px]'/>
                    <img src="assets/img/Group.png" className='w-5/6 h-[32px] sm:h-[42px]'/>
                </div>
                <div className='flex text-[#E5E1A8] w-1/2 lg:w-1/4 justify-around'>
                    <FaTwitter className='mt-3'/>
                    <FaTelegram className='mt-3'/>
                    <FaDiscord className='mt-3'/>
                    <div className='flex justfy-center items-center px-[16px] sm:px-[32px] py-[16px] bg-[#E42B2B] rounded-full border-yellow-300 border-solid border-x-[0.5px] border-t-[1px] border-b-[3px] text-white'><span className='hidden sm:block'>Connect Wallet</span><FaPlus className='block sm:hidden' /></div>
                </div>
                {/* <div className='text-white w-1/2 flex h-[32px] justify-end'>
                    <div className='flex py-1 pr-2 pl-1 justify-center content-center rounded-l-3xl bg-[#131619]'>
                        <img src="assets/img/Shape.png" alt="" className='w-[19px] h-[19px] mt-[2px]' />
                        <p className="font-['Lato'] center text-[10px] font-semibold leading-[23px] ml-1.5 ">0.023 SOL</p>
                    </div>
                    <div className='flex py-1.5 pr-2 pl-1.5 justify-center content-center bg-[#292C31] rounded-r-3xl border-y border-b border-[#131619]'>
                        <div className='w-4 h-4'><FaPlus/></div>
                    </div>
                    <img src="assets/img/avater.png"alt="" className='pl-[8px]' />
                </div> */}
            </div>
        </div>
    )
}

export default Header