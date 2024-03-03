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
                <Image src='/profiles/default.jpg' width={50} height={50} alt='donor' />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='text-[1rem] font-medium'>{props.name}</div>
                <div className='flex items-center gap-2'>
                    <div>
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