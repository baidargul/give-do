'use client'
import Image from 'next/image';
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type Props = {}

const BottomSection = (props: Props) => {
    return (
        <div className='flex gap-2 items-center'>
            <div className='relative'>
                <p className='font-semibold absolute top-3 left-2 text-sm'>18%</p>
                <div className='w-fit'>
                    <CircularProgressbar value={60} text={``} styles={buildStyles({
                        strokeLinecap: "butt", pathColor: "#FBAF17", trailColor: "#E8E8E8"
                    })} className='w-[40px] h-[40px]' />
                </div>
            </div>
            <div>
                <div className='flex gap-1'>
                    <span className='text-[16px] font-semibold text-site-redHighlight'>598</span>
                    <div className='font-medium'>girls supported, 2735 left</div>
                </div>
                <div className='flex gap-2 items-center'>
                    <div>
                        <Image src={"/other/people.png"} width={22} height={22} alt='every' />
                    </div>
                    <div className='text-sm'>122 Supporters</div>
                </div>
            </div>
        </div>
    )
}

export default BottomSection