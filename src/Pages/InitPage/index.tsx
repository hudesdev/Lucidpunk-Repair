import react from 'react'
import { FaClock, FaCheckSquare, FaInfoCircle } from 'react-icons/fa'
import HeroCard from '../../Component/HeroCard'
import './index.css'
import { useAccount, useConnect, useEnsName } from 'wagmi'

const InitPage = ()=> {

    const { connect, connectors } = useConnect()

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

    const [nfts, setNfts] = react.useState([
        {
            url: 'hero1.png',
            price: 11.5
        },
        {
            url: 'hero1.png',
            price: 1.4
        },
        {
            url: 'hero1.png',
            price: 4.6
        },
        {
            url: 'hero1.png',
            price: 11.5
        },
        {
            url: 'hero1.png',
            price: 23
        },
        {
            url: 'hero1.png',
            price: 11.5
        }
    ]);
    return (
        <div>
            <div className='w-full flex justify-center'>
                <div className='w-5/6 py-[24px] sm:py-[32px] flex flex-col items-center lg:flex-row justify-between sm:items-start border-b-[1px] border-zinc-50/[.1]'>
                    <img src="assets/img/Details.png" alt="" className='h-[120px] w-[120px]' />
                    <div className='w-full sm:w-[506px] flex flex-col items-center sm:items-start'>
                        <div className='text-white text-[24px] sm:text-[32px] font-bold leading-[48px] font-sans'>King Punk 2023 Edition</div>
                        <div className='text-[#676A71] text-center sm:text-left text-[18px] font-normal leading-[24px]'>Step into the vast Ether universe by purchasing an Avatar. These characters were opened through Ether Capsules. After purchasing your Avatar, verify your NFT in the official Discord server to join our universe. We look forward to seeing you there.</div>
                    </div>
                    <div className='w-full sm:h-[148px] sm:w-[337px] flex justify-between items-end mt-3'>
                        <div className=''>
                            <div className='text-[14px] text-white font-bold leading-[20px] mb-[8px] font-sans'>Floor</div>
                            <div className='flex mb-[8px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#676A71]/[.3] flex justify-center items-center mr-3'>
                                    <img src="assets/img/Sol.png" alt="" className='w-[20px] h-[20px]' />
                                </div>
                                <div className='text-[#a1a087] text-[18px] font-bold leading-[24px] ml-[8px] font-sans'>11.24SOL</div>
                            </div>
                            <div className='text-[14px] text-white font-bold leading-[20px] mb-[8px] font-sans'>Tickets sales ends in:</div>
                            <div className='flex px-[8px] py-[2px] items-center rounded-[21px] border-[1px] gap-2 backdrop-blur-lg border-slate-400 Hero__revers-clock'>
                                <FaClock className='text-[#E5E1A8] mr-[8px]'></FaClock>
                                <div className='text-white text-[14px] font-semibold leading-[24px] font-sans text-center'>15h : 01m: 02s</div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='text-[14px] text-white font-bold leading-[20px] mb-[8px] font-sans'>Top Offer</div>
                            <div className='flex mb-[8px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#676A71]/[.3] flex justify-center items-center mr-3'>
                                    <img src="assets/img/Sol.png" alt="" className='w-[20px] h-[20px]' />
                                </div>
                                <div className='text-[#E5E1A8] text-[18px] font-bold leading-[24px] ml-[8px] font-sans'>13.95 SOL</div>
                            </div>
                            <div className='text-[14px] text-white font-bold leading-[20px] mb-[8px] font-sans'>Tickets sales starts in:</div>
                            <div className='text-[#E5E1A8] text-[18px] font-bold leading-[24px] ml-[8px] font-sans'>June 23, 2023</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ///////////////////////////////////////////////////////////////////////// */}
            <div className='w-full flex justify-center'>
                <div className='mt-[32px] flex flex-col xl:flex-row justify-between w-full xl:w-5/6'>
                    
                    <div className='w-full gap-2 xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 overflow-hidden md:m-[20px] xl:m-[0]'>
                        {
                            nfts.map((val, index) => {
                                return <HeroCard url = {val.url} price = {val.price} key = {val + index.toString()} />
                            })
                        }
                        
                    </div>
                    <div className='w-full xl:w-1/4'>
                        <div className='flex py-[24px] px-[4px] flex-col items-center gap-[24px] self-stretch border-y-[1px] xl:rounded-[32px] xl:border-[1px] border-[#292C31] bg-[#484848]/[.08]'>
                            <p className='text-white text-center text-[32px] font-bold leading-[48px]'>Start to raffle</p>
                            <p className='w-full text-[#676A71] text-center text-[18px] leading-[24px] font-normal  '>You can enter the raffle by connecting you solana wallet</p>
                            <button onClick={() => connect({connector: connectors[0]})} className='flex w-2/3 justify-center items-center px-[32px] py-[16px] bg-[#E42B2B] rounded-full border-yellow-300 border-solid border-x-[0.5px] border-t-[1px] border-b-[3px]  text-white'>Connect Wallet</button>
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
            {/* ///////////////////////////////////////////////////////////////////////// */}
            <div className='w-full flex justify-center mt-[32px] mb-[50px]'>
                <div className='w-5/6 flex flex-col gap-4'>
                    <p className='text-yellow text-semiTitle font-semibold leading-[24px] flex gap-4'><FaInfoCircle/> Instructions on how to play</p>
                    <p className='text-white'>When it comes to Raffle Tickets, there are a couple of strategies. Which strategy you choose depends on your risk tolerance. Some people who prefer to take guaranteed returns on their tickets will elect to sell them in the Lucidpunks. Those who enjoy taking a chance will enter their tickets into the NFT raffles. There is definitely some easy GHST to be made by selling tickets in the Lucidpunks. Although, the idea of winning a raffle for a Godlike item can be tantalizing. It all comes down to your personal preference! Regardless of how you choose to make use of your Raffle Tickets we wish you the best of luck!</p>
                </div>
            </div>
        </div>
    )
}

export default InitPage