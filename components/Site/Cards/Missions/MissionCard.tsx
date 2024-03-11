import Image from 'next/image'
import React from 'react'
import BottomSection from './BottomSection'


type Props = {}

const MissionCard = (props: Props) => {
    return (
        <div className='drop-shadow-md bg-white rounded-2xl hover:scale-105 transition-all'>
            <div className=''>
                <div className='relative'>
                    <Image src={"/homepage/missions/1.jpg"} width={395.52} height={341.96} alt='every-girl-in-school' className='rounded-2xl object-cover overflow-clip w-[384px] h-[332px]' />
                    <div className='absolute flex flex-col bottom-2 left-4 text-white'>
                        <span className='text-[16px] italic'>Mission</span>
                        <span className='text-[24px] font-bold'>Every Girl in School</span>
                    </div>
                    <div className='text-[12px] font-semibold px-[12px] py-[4px] absolute top-3 bg-site-bg-tag_tax_benefits_available rounded-r-md text-site-text-tag_tax_benefits_available'>Tax Benefits Available</div>
                </div>
            </div>
            <div className='p-4'>
                <BottomSection/>
            </div>
        </div>
    )
}

export default MissionCard