import SiteLogo from '@/components/Site/Logo/SiteLogo'
import React from 'react'

type Props = {}

const Title = (props: Props) => {
    return (
        <div>
            <div className='relative flex justify-center'>
                <div className='bg-gradient-to-b from-slate-50 to-transparent w-[386px] h-[386px] absolute rounded-full'></div>
                <div className='absolute z-[1] top-[100px]'>
                    <SiteLogo size={70} />
                </div>
                <div className='text-[48px] font-semibold text-center absolute z-[1] top-[140px] w-[50%]'>
                    India’s most trusted online donation platform
                </div>
            </div>
        </div>
    )
}

export default Title