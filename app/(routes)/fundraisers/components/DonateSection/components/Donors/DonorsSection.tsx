import Seperator from '@/components/Site/Seperator/Seperator'
import Tag from '@/components/Site/Tags/Tag'
import Image from 'next/image'
import React from 'react'

type Props = {}

const DonorsSection = (props: Props) => {
    return (
        <div className='flex gap-4 items-center'>
            <div>
                <Image src='/profiles/default.jpg' width={50} height={50} alt='donor' />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='text-[1rem] font-medium'>Zainul Abidin</div>
                <div className='flex items-center gap-2'>
                    <div>
                        ₹50
                    </div>
                    <Seperator type='dotted' />
                    <Tag type='RECENT DONOR' />
                </div>
            </div>
        </div>
    )
}

export default DonorsSection