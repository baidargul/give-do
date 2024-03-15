import SiteLogo from '@/components/Site/Logo/SiteLogo'
import React from 'react'

type Props = {}

const Title = (props: Props) => {
    return (
        <div>
            <div className='relative flex justify-center'>
                <div className='bg-gradient-to-b from-slate-50 to-transparent w-[200px] h-[286px] tablet:w-[386px] tablet:h-[386px] absolute rounded-full'></div>
                <div className='absolute z-[1] top-[50px] tablet:top-[100px]'>
                    <SiteLogo size={70} />
                </div>
                <div className='text-[1.5rem] font-extrabold tablet:text-[48px] tablet:font-semibold text-center absolute z-[1] top-[90px] tablet:top-[140px] tablet:w-[50%]'>
                    India’s most trusted online donation platform
                </div>
            </div>
        </div>
    )
}

export default Title