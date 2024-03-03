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
            <div className='flex items-center gap-4'>
                <Image src={props.image ? props.image : "/profiles/default.jpg"} alt='organiser' width={60} height={60} />
                <div>
                    <div className='font-semibold text-[1.125rem]'>{props.name}</div>
                    <div className='text-site-text-fundraiser_support_description'>{props.subText}</div>
                </div>
            </div>
        </div>
    )
}

export default Organiser