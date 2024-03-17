import BtnShare from '@/components/Site/Buttons/BtnShare'
import Seperator from '@/components/Site/Seperator/Seperator'
import Image from 'next/image'
import React from 'react'

type Props = {
    image: string,
    title: string,
    description: string,
    location: string,
    raised: string,
    supporters: string
}

const NGO = (props: Props) => {
    return (
        <div className='flex gap-6 items-start w-fit'>
            <div className='w-[120px]'>
                <div className='w-[120px] h-[120px] border rounded-md flex justify-center items-center'>
                    <Image src={`/ngo/${props.image}`} width={98.4} height={98.4} alt='ngo' />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[24px] font-semibold'>{props.title}</div>
                <div className='text-[16px] text-site-text-fundraiser_support_description justify-between flex gap-1 items-center'>
                    <div className='flex gap-1 items-center'>
                        <div>
                            <Image src={"/other/location.png"} width={18} height={18} alt='location' />
                        </div>
                        <p>
                            {props.location}
                        </p>
                    </div>
                    <div className='opacity-20'>
                        <Seperator type='dotted' />
                    </div>
                    <div className='flex gap-1 items-center'>
                        <div>
                            <Image src={"/other/charity.png"} width={18} height={18} alt='charity' />
                        </div>
                        <p>
                            {props.raised}
                        </p>
                    </div>
                    <div className='opacity-20'>
                        <Seperator type='dotted' />
                    </div>
                    <div className='flex gap-1 items-center'>
                        <div>
                            <Image src={"/other/people.png"} width={18} height={18} alt='supporters' />
                        </div>
                        <p>
                            {props.supporters}
                        </p>
                    </div>
                </div>
                <div className='line-clamp-3 text-[16px] text-site-text-fundraiser_support_description'>
                    {props.description}
                </div>
                <div className='flex gap-4 scale-90 -ml-9'>
                    <BtnShare red caption='Donate Now' textSize='text-sm' />
                    <BtnShare caption='View Profile' textSize='text-sm' />
                </div>
            </div>
        </div>
    )
}

export default NGO