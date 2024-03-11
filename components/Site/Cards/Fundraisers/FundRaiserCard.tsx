import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React from 'react'
import BtnShare from '../../Buttons/BtnShare'

type Props = {}

const FundRaiserCard = (props: Props) => {
    return (
        <div className='rounded-2xl w-auto h-[559.6px] group cursor-pointer hover:scale-105 transition-all drop-shadow-md bg-white'>
            <div className='w-full'>
                <Image src={"/homepage/missions/1.jpg"} width={384} height={300} alt={"fundraiser"} className='rounded-t-2xl h-[300px] w-full object-cover' />
            </div>
            <div className='p-7'>
                <div className='text-[20px] font-semibold line-clamp-2 text-site-text-tag_top_donor'>Help Vinay bring children facing abuse in red-light areas to safety and protect them</div>
                <div className='text-site-text-fundraiser_support_description text-[16px]'>by Social Activities Integration</div>
                <div className='flex justify-between items-center mt-3 mb-2'>
                    <div className='flex gap-1 p-1 text-[14px] text-site-text-fundraiser_support_description items-center bg-site-text-fundraiser_support_description/5 w-fit'>
                        <div><Image src={"/other/people.png"} width={16} height={16} alt='supporters' /></div>
                        <div>1055</div>
                        <div>Supporters</div>
                    </div>
                    <div className='flex gap-1 p-1 text-[14px] text-site-text-fundraiser_support_description items-center bg-site-text-fundraiser_support_description/5 w-fit'>
                        <div><Image src={"/other/watchGrey.png"} width={16} height={16} alt='supporters' /></div>
                        <div>9</div>
                        <div>Days Left</div>
                    </div>
                </div>
                <div className='mb-2 group-hover:opacity-0'>
                    <Progress value={20} />
                </div>
                <div className='flex justify-between items-center group-hover:hidden'>
                    <div>
                        <div className='text-[20px] font-medium'>₹2,00,000</div>
                    </div>
                    <div className='text-site-text-fundraiser_support_description'>
                        Raised of ₹10,00,000 goal
                    </div>
                </div>
                <div className='hidden group-hover:block'>
                    <BtnShare red />
                </div>
            </div>
        </div>
    )
}

export default FundRaiserCard