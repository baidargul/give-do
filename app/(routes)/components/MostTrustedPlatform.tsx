import SiteLogo from '@/components/Site/Logo/SiteLogo'
import React from 'react'

type Props = {}

const MostTrustedPlatform = (props: Props) => {
    return (
        <div className=''>
            <div>
                <div className='relative flex justify-center'>
                    <div className='absolute z-[1] top-[100px]'>
                        <SiteLogo size={70} />
                    </div>
                    <div className='text-[48px] font-semibold text-center absolute z-[1] top-[140px] w-[50%]'>
                        India’s most trusted online donation platform
                    </div>
                    <div className='bg-gradient-to-b from-slate-50 to-transparent w-[386px] h-[386px] absolute rounded-full'></div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-4 justify-items-center w-fit gap-16 shadow-md p-5'>
                    <div>
                        <div className='text-[40px] font-semibold'>2.7M+</div>
                        <div className='font-medium text-site-text-fundraiser_support_description'>Donors</div>
                    </div>
                    <div>
                        <div className='text-[40px] font-semibold'>15M+</div>
                        <div className='font-medium text-site-text-fundraiser_support_description'>Lives Impacted</div>
                    </div>
                    <div>
                        <div className='text-[40px] font-semibold'>3000+</div>
                        <div className='font-medium text-site-text-fundraiser_support_description'>Verified Non Profits</div>
                    </div>
                    <div>
                        <div className='text-[40px] font-semibold'>300+</div>
                        <div className='font-medium text-site-text-fundraiser_support_description'>Corporate Partners</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostTrustedPlatform