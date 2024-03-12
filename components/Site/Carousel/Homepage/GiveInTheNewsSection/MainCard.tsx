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

const MainCard = (props: Props) => {
    const {item} = props
    return (
        <div className='rounded-2xl w-max-[380px] w-[380px] h-[430px] drop-shadow-md bg-white'>
            <div>
                <Image src={item.image} width={380} height={238} alt='news-section' className='w-[380px] h-[238px] object-cover rounded-t-2xl' />
            </div>
            <div className='p-4'>
                <div className='text-[20px] font-semibold line-clamp-2'>
                    {item.title}
                </div>
                <div className='text-site-text-fundraiser_support_description'>
                    {item.date}
                </div>
                <div className='mt-12'>
                    <Image src={item.source} width={145} height={27} alt='news-source' className='w-[145px] h-[27px] object-fill object-center overflow-clip' />
                </div>
            </div>
        </div>
    )
}

export default MainCard