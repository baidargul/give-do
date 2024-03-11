'use client'
import Image from 'next/image';
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

const BottomSection = (props: Props) => {
    return (
        <div className='flex gap-2 items-center'>
            <div className='relative'>
                <p className='font-semibold absolute top-3 left-2 text-xs'>{Math.floor((props.mission.supported / props.mission.left) * 100)}%</p>
                <div className='w-fit'>
                    <CircularProgressbar value={Math.floor((props.mission.supported / props.mission.left) * 100)} minValue={0} maxValue={100} text={``} styles={buildStyles({
                        strokeLinecap: "butt", pathColor: "#FBAF17", trailColor: "#E8E8E8"
                    })} className='w-[40px] h-[40px]' />
                </div>
            </div>
            <div>
                <div className='flex gap-1'>
                    <span className='text-[16px] font-semibold text-site-redHighlight'>{props.mission.supported}</span>
                    <div className='font-medium'>{props.mission.entity} supported, {props.mission.left} left</div>
                </div>
                <div className='flex gap-2 items-center'>
                    <div>
                        <Image src={"/other/people.png"} width={22} height={22} alt='every' />
                    </div>
                    <div className='text-sm'>{props.mission.supporters} Supporters</div>
                </div>
            </div>
        </div>
    )
}

export default BottomSection