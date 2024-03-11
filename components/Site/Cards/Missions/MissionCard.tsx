import Image from 'next/image'
import React from 'react'
import BottomSection from './BottomSection'
import BtnShare from '../../Buttons/BtnShare'


type Props = {
    mission: {
        title: string,
        entity: string,
        supported: number,
        left: number,
        supporters: number,
        image: string,
    }
}

const MissionCard = (props: Props) => {
    return (
        <div className='drop-shadow-md bg-white rounded-2xl hover:scale-105 transition-all group cursor-pointer'>
            <div className=''>
                <div className='relative'>
                    <Image src={`/homepage/missions/${props.mission.image}.jpg`} width={395.52} height={341.96} alt={`${props.mission.entity}`} className='rounded-2xl object-cover overflow-clip w-[384px] h-[332px]' />
                    <div className='absolute flex flex-col bottom-2 left-4 text-white z-[1]'>
                        <span className='text-[16px] italic'>Mission</span>
                        <span className='text-[24px] font-bold'>{props.mission.title}</span>
                    </div>
                    <div className='text-[12px] font-semibold px-[12px] py-[4px] absolute top-3 bg-site-bg-tag_tax_benefits_available rounded-r-md text-site-text-tag_tax_benefits_available'>Tax Benefits Available</div>
                    <div className='absolute bottom-0 bg-gradient-to-t from-black to-transparent h-20 w-full'></div>
                </div>
            </div>
            <div className='h-[77.24px] bg-white  rounded-b-2xl'>
                <div className='p-4 group-hover:hidden'>
                    <BottomSection mission={props.mission} />
                </div>
                <div className='hidden group-hover:block p-4'>
                    <BtnShare red caption='Pledge Monthly' />
                </div>
            </div>
        </div>
    )
}

export default MissionCard