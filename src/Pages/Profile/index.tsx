import react from 'react'
import { FaClock, FaCheckSquare } from 'react-icons/fa'
import './index.css'

const Profile = () => {

    const [history, setHistory] = react.useState([
        {
           _id: "1d8h71...12389y",
           entry: 1,
           moment: 1,
        },
        {
           _id: "1d8h71...12389y",
           entry: 50,
           moment: 1,
        },
        {
            _id: "1d8h71...12389y",
            entry: 1,
            moment: 1,
        },
        {
            _id: "1d8h71...12389y",
            entry: 1,
            moment: 2,
        },
        {
            _id: "1d8h71...12389y",
            entry: 3,
            moment: 2,
        },
        {
            _id: "1d8h71...12389y",
            entry: 50,
            moment: 4,
        },
    ])
    return (
        <div className='flex justify-center w-full my-[40px]'>
            <div className='flex flex-col lg:flex-row justify-between gap-[40px] w-full  md:w-4/5 '>
                <div className='w-full lg:w-1/2 h-[560px] flex p-[16px] justify-center items-center rounded-[32px] border-graySec border-[1px] bg-ston-800 self-stretch gap-[16px]'>
                    <img src="assets/img/hero1.png" alt="" className='w-full h-full' />
                </div>
                <div className='w-full lg:w-1/2 flex flex-col gap-[24px]'>
                    <div className='flex flex-col px-[24px] md:p-0 '>
                        <p className='text-title font-semibold leading-[48px] text-white'>King Punk 2023 Edition</p>
                        <p className='font-semiTitle text-yellow font-medium leading-[32px]'>#93272</p>
                    </div>

                    <div className='px-[24px] md:p-0 w-full flex flex-col md:flex-row'>
                        <div className='w-full mg:w-1/2 flex flex-col gap-[8px] '>
                            <p className='text-white text-content font-bold leading-6 font-["Lato"]'> Ticket Sales Ends in:</p>
                            <div className='flex w-2/3 px-[16px] py-[8px] items-center rounded-[21px] border-[1px] gap-2 backdrop-blur-lg border-slate-400 Hero__revers-clock'>
                                <FaClock className='text-[#E5E1A8] mr-[8px]'></FaClock>
                                <div className='text-white text-semiTitle font-semibold leading-[24px] font-sans text-center'>15h : 01m: 02s</div>
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col gap-[8px] justify-between mt-[24px] md:m-0'>
                            <p className='text-white text-content font-bold leading-6'> Ticket Sales Ends in:</p>
                            <p className='text-semiTitle font-bold leading-[32px] text-yellow'> June 23, 2023</p>
                        </div>
                    </div>

                    <div className='px-[24px] md:p-0 w-full flex flex-col md:flex-row'>
                        <div className='w-1/2 flex flex-col gap-[8px]'>
                            <div className='text-content text-white font-bold leading-[20px] mb-[8px]'>Floor</div>
                            <div className='flex mb-[8px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#676A71]/[.3] flex justify-center items-center mr-3'>
                                    <img src="assets/img/Sol.png" alt="" className='w-[20px] h-[20px]' />
                                </div>
                                <div className='text-[#a1a087] text-semiTitle font-bold leading-[24px] ml-[8px]'>11.24 SOL</div>
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col gap-[8px] mt-[24px] md:m-0'>
                            <div className='text-content text-white font-bold leading-[20px] mb-[8px]'>Total Ticket Volue</div>
                            <div className='flex mb-[8px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#676A71]/[.3] flex justify-center items-center mr-3'>
                                    <img src="assets/img/Sol.png" alt="" className='w-[20px] h-[20px]' />
                                </div>
                                <div className='text-[#a1a087] text-semiTitle font-bold leading-[24px] ml-[8px]'>1.95 SOL</div>
                            </div>
                        </div>
                    </div>
                    <div className='px-[24px] md:p-0 flex flex-col gap-[8px] text-white'>
                        <p className='text-content font-bold leading-[24px]'>Descriptions</p>
                        <p className='text-content font-bold leading-[24px]'>Enter now for a chance to win Mutant Ape Yacht Club #10735. The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale...<span className='text-red cursor-pointer'>See more</span></p>
                    </div>
                    <div className='flex p-[24px] flex-col items-start text-white self-stretch sm:rounded-[32px] border-y-[1px] sm:border-[1px] border-[#292C31] bg-[#484848]/[.08] mt-[24px]'>
                        <div className='flex w-full justify-between'>
                            <p className='text-content font-bold leading-[24px]'>CONTRACT:</p>
                            <FaCheckSquare className = 'w-[24px] h-[24px] text-yellow' />
                        </div>
                        <div className='w-full overflow-hidden'>
                            <p className='text-content font-bold leading-[24px] '>0X4F9343FA110E8C5C1276B810FBBBB70A19678...</p>
                        </div>
                    </div>
                    <div className='flex p-[24px] flex-col items-center gap-[24px] self-stretch sm:rounded-[32px] border-y-[1px] sm:border-[1px] border-[#292C31] bg-[#484848]/[.08] mt-[24px]'>
                            <div className='flex justify-between w-full'>
                                <div className='flex w-[140px] justify-center items-center px-[24px] py-[12px] bg-[#E42B2B] rounded-full text-white'>Activity</div>
                                <div className='flex w-[140px] justify-center items-center px-[24px] py-[12px] border-[1px] border-[#292C31] rounded-full text-white'>Part. (23)</div>
                            </div>
                            <div className='flex flex-col justify-between w-full text-white gap-1 [&>*:nth-child(even)]:bg-graySec [&>*:nth-child(odd)]:bg-zinc-800 [&>*:first-child]:rounded-t-lg'>
                                {
                                    history.map((val, index) => {
                                        return <div className='px-[24px] py-[16px] flex items-center justify-between gap-[10px] self-stretch w-full'>
                                            <div>
                                                <p className='text-[14px] font-semibold capitalize'>{val._id}</p>
                                                <p className='text-[12px] font-semibold text-red'> {val.entry} Entry</p>
                                            </div>
                                            <p className='flex font-["Lato"] text-[14px] text-yellow gap-[8px] font-medium capitalize '>{
                                                val.moment == 1 ? "Just now": val.moment < 60 ? val.moment + ' ' + 'Second Ago' : val.moment / 60 + ' Minute Ago'
                                            }<FaCheckSquare className = 'w-[24px] h-[24px]' /></p>
                                        </div>
                                    })
                                }
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile