import react, { ReactNode } from 'react'

const LinkBtn = ({children}:LinkBtnType) => {
    return (
        <div className='flex flex-wrap justify-center content-center border-x border-t border-b-[3px] border-[#292C31] rounded-3xl w-[40px] h-[40px] text-white'>
            {children}
        </div>
    )
}

type LinkBtnType = {children: ReactNode}

export default LinkBtn