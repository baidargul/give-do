import Seperator from '@/components/Site/Seperator/Seperator'
import Tag from '@/components/Site/Tags/Tag'
import Image from 'next/image'
import React from 'react'

type Props = {
    name: string
    amount: number
    type: "RECENT DONOR" | "FIRST DONOR" | "TOP DONOR"
}

const Donor = (props: Props) => {
    return (
        <div className='flex gap-4 items-center'>
            <div>
                <Image src='/profiles/default.jpg' width={50} height={50} className='w-[65px] h-[65px] tablet:w-[50px] tablet:h-[50px]' alt='donor' />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='text-[1rem] font-semibold text-site-text-tag_first_donor tablet:font-medium'>{props.name}</div>
                <div className='flex items-center gap-2'>
                    <div className='text-site-text-fundraiser_support_description'>
                        ₹{props.amount}
                    </div>
                    <Seperator type='dotted' />
                    <Tag type={props.type} />
                </div>
            </div>
        </div>
    )
}

export default Donor