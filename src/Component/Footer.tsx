import react from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa'

const Footer = ()=> {
    return (
        <div className='w-full flex justify-center pb-[100px] pt-[50px] border-t-[1px] border-graySec'>
            <div className='w-5/6'>
                <div className='w-full'>
                    <button className='float-right rounded-full px-[15px] py-[16px] justify-center items-center border-x-[0.5px] border-t-[0.5px] border-b-[3px] border-yellow text-white bg-red hidden md:flex'>
                        <img src="assets/img/chat.png" alt="" className='w-[24px] h-[24px]' />
                    </button>
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between gap-[90px]'>
                    <div className='flex flex-col w-full md:w-1/2  gap-[24px]' >
                        <div className = "flex gap-[24px]">
                            <img src="assets/img/logo.png" alt=""className='h-[42px]'/>
                            <img src="assets/img/Group.png" className='h-[42px]'/>
                        </div>
                        <p className='text-content text-white leading-[24px]'>
                            The purchase of a LucidPunk or RevMark digital asset can lead to loss of money over short or even long periods. The holders of the LucidPunks or RevMarks digital assets should expect prices to have large range fluctuations. The information published on the Website cannot guarantee that the investors in LucidPunks or RevMark digital assets would not lose money. Anyone wishing to invest should not. This a community movement not a business.
                        </p>
                        <div className='flex text-[#E5E1A8] justify-start gap-[22px]'>
                            <FaTwitter className='mt-3'/>
                            <FaTelegram className='mt-3'/>
                            <FaDiscord className='mt-3'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[16px] w-1/4'>
                        <p className='text-title text-white font-bold leading-[30px]'>Lucidpunk</p>
                        <Link to = '/' className='text-semiTitle text-white font-semibold' >DeFi</Link>
                        <Link to = '/' className='text-semiTitle text-white font-semibold' >Colourize</Link>
                        <Link to = '/' className='text-semiTitle text-white font-semibold' >Arm Protocol</Link>
                        <Link to = '/' className='text-semiTitle text-white font-semibold' >Winners</Link>
                    </div>
                    <div className='flex flex-col items-center gap-[16px] w-full md:w-1/4'>
                        <p className='text-title text-white font-bold leading-[30px]'>About</p>
                        <Link to = '/' className='text-semiTitle text-white font-semibold' >About Us</Link>
                        <Link to = '/' className='text-semiTitle text-white font-semibold' >Career</Link>
                        <Link to = '/' className='text-semiTitle text-white font-semibold' >Term and Condition</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer