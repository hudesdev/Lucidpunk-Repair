import react from 'react'
import { FaQuoteRight } from 'react-icons/fa'

const Footer = ()=> {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-5/6'>
                <div className='w-full'>
                    <button className='float-right flex rounded-full px-[15px] py-[16px] justify-center items-center border-x-[0.5px] border-t-[0.5px] border-b-[3px] border-yellow text-white bg-red'>
                        <img src="assets/img/chat.png" alt="" className='w-[24px] h-[24px]' />
                    </button>
                </div>
                <div className='w-full flex justify-between gap-[90px]'>
                    <div className='flex flex-col' >
                        <div className = "flex gap-[24px]">
                            <img src="assets/img/logo.png" alt=""className='w-2/12 h-[32px] sm:h-[42px]'/>
                            <img src="assets/img/Group.png" className='w-5/6 h-[32px] sm:h-[42px]'/>
                        </div>
                        <p className='text-content text-white leading-[24px]'>
                            The purchase of a LucidPunk or RevMark digital asset can lead to loss of money over short or even long periods. The holders of the LucidPunks or RevMarks digital assets should expect prices to have large range fluctuations. The information published on the Website cannot guarantee that the investors in LucidPunks or RevMark digital assets would not lose money. Anyone wishing to invest should not. This a community movement not a business.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer