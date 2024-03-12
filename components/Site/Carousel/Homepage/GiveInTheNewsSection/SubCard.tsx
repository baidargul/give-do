import Image from 'next/image'
import React from 'react'

type Props = {}

const SubCard = (props: Props) => {
    return (
        <div className='p-5 bg-white drop-shadow-md w-[404px] h-[130px] rounded-2xl'>
            <div className='flex gap-4'>
                <div className=''>
                    <Image src='/homepage/giveinthenews/1.jpg' width={250} height={250} alt='news' className='rounded-md' />
                </div>
                <div className=''>
                    <div className='text-[20px] font-semibold line-clamp-2'>Technology In CSR Is A Game-changer For Maximising Social Impact</div>
                    <div className='text-site-text-fundraiser_support_description text-[14px] mt-3'>25 August</div>
                </div>
            </div>
        </div>
    )
}

export default SubCard