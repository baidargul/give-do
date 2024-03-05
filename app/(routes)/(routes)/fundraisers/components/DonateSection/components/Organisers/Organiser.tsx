import Image from 'next/image'
import React from 'react'

type Props = {
    name: string
    subText: string
    image?: string
}

const Organiser = (props: Props) => {
    return (
        <div>
            <div className='flex items-center gap-4 '>
                <Image src={props.image ? props.image : "/profiles/default.jpg"} alt='organiser' className='w-[60px] h-[60px] tablet:w-[50px] tablet:h-[50px]' width={60} height={60} />
                <div>
                    <div className='font-semibold text-[1rem] tablet:text-[1.125rem] w-[60%] tablet:w-full'>{props.name}</div>
                    <div className='text-site-text-fundraiser_support_description'>{props.subText}</div>
                </div>
            </div>
        </div>
    )
}

export default Organiser