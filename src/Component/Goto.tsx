
import react, { ReactNode } from 'react'
import LinkBtn from './LinkBtn'
import { FaArrowLeft, FaTwitter, FaTelegram, FaEllipsisV, FaShareAlt  } from 'react-icons/fa'

const Goto = () => {
    return (
        <div className='w-full flex justify-center mt-[20px] sm:mt-[50px]'>
            <div className='w-4/5 flex justify-between'>
                <div className='flex flex-wrap content-center border-x border-t border-b-[3px] border-[#292C31] px-[20px] rounded-3xl text-white '>
                    <FaArrowLeft/> <span className='hidden sm:block'>Back</span> 
                </div>
                <div className='w-[184px] sm:w-[226px] flex justify-between'>
                    <LinkBtn>
                        <FaTwitter/>
                    </LinkBtn>
                    <LinkBtn>
                        <FaTelegram/>
                    </LinkBtn>
                    <LinkBtn>
                        <FaEllipsisV/>
                    </LinkBtn>
                    <LinkBtn>
                        <FaShareAlt/>
                    </LinkBtn>
                </div>
            </div>
            
        </div>
    )
}

export default Goto