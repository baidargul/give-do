import Image from 'next/image'
import React from 'react'

type Props = {}

const NGOsmallcard = (props: Props) => {
    return (
        <div className='flex gap-4 hover:scale-105 transition-all hover:text-site-redHighlight cursor-pointer'>
            <div className='w-[52px] h-[50px] flex justify-center items-center'>
                <Image src={"/ngo/4.jpg"} width={100} height={100} alt="ngo" className='w-full h-full rounded-md' />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='text-[16px] font-semibold'>
                    Maitri
                </div>
                <div className='text-site-text-fundraiser_support_description text-[14px]'>
                    ₹6,64,816 raised
                </div>
            </div>
        </div>
    )
}

export default NGOsmallcard