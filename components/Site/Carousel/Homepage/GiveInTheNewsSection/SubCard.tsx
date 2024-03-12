import Image from 'next/image'
import React from 'react'

type Item = {
    title: string,
    image: string,
    date: string,
    source: string
}

type Props = {
    item: Item
}

const SubCard = (props: Props) => {
    const {item} = props
    return (
        <div className='p-5 bg-white drop-shadow-md w-[404px] h-[130px] rounded-2xl'>
            <div className='flex gap-4 w-full relative'>
                <div className='w-[88.2] h-[88.2]'>
                    <Image src={item.image} width={88.2} height={88.2} alt='news' className='rounded-md' />
                </div>
                <div className='w-[264px] h-[85px]'>
                    <div className='text-[20px] font-semibold line-clamp-2'>{item.title}</div>
                    <div className='text-site-text-fundraiser_support_description text-[14px] absolute bottom-0'>25 August</div>
                </div>
            </div>
        </div>
    )
}

export default SubCard