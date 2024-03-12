import Image from 'next/image'
import React from 'react'

type Props = {}

const MainCard = (props: Props) => {
    return (
        <div className='rounded-2xl w-max-[380px] w-[380px] h-[430px] drop-shadow-md bg-white'>
            <div>
                <Image src='/homepage/giveinthenews/1.jpg' width={380} height={238} alt='news-section' className='w-[380px] h-[238px] object-cover rounded-t-2xl' />
            </div>
            <div className='p-4'>
                <div className='text-[20px] font-semibold line-clamp-2'>
                    Give acquires Goodera’s leading CSR management business
                </div>
                <div className='text-site-text-fundraiser_support_description'>
                    17 Nov 2022
                </div>
                <div className='mt-12'>
                    <Image src='/homepage/giveinthenews/sources/1.jpg' width={145} height={27} alt='news-source' className='w-[145px] h-[27px] object-fill object-center overflow-clip' />
                </div>
            </div>
        </div>
    )
}

export default MainCard