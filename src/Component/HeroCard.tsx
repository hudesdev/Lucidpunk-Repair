import react from 'react'

const HeroCard = ()=> {
    return (
        <div className='flex p-[12px] flex-col items-center flex-[1_0_0] self-stretch rounded-3xl border-[1px] border-[#292C31] bg-[#292C31] w-full lg:w-5/6 box-border'>
            <img src="assets/img/hero1.png" alt="" className='w-full' />
            <div className='flex justify-between w-full my-[12px]'>
                <p className='font-["Lato"] text-[18px] not-italic text-white'>#912723</p>
                <div className='font-["Lato"] text-[14px] not-italic text-[#E5E1A8] leading-[20px] flex items-center'>
                    <div className='h-[14px] w-[14px] rounded-full bg-[#676A71]/[.3] flex justify-center items-center mr-3'>
                        <img src="assets/img/Sol.png" alt="" className='w-[9px] h-[9px]' />
                    </div> 11.89 SOL
                </div>
            </div>
            <div className='flex py-[14px] px-[14px] justify-center items-center self-center rounded-full border-x-[0.5px] border-t-[0.5px] border-b-[3px] border-[#676A71] bg-[#131619] w-full'>
                <p className='text-white text-center first-letter text-[14px] font-semibold leading'>Details</p>
            </div>
        </div>
    )
}

export default HeroCard