'use client'
import Image from 'next/image'
import React from 'react'

type Props = {}

const BlogCard = (props: Props) => {
    return (
        <div className='rounded-2xl bg-white w-[384px] h-[372.4px] drop-shadow-md'>
            <div className='w-fit'>
                <Image src={"/homepage/blog/1.jpg"} width={384} height={216} className='w-[384px] h-[216px] object-cover rounded-t-2xl' alt='' />
            </div>
            <div className='p-4 pt-10 pb-8 flex flex-col justify-between gap-4'>
                <div className='text-2xl font-semibold line-clamp-2'>
                    7 myths about autism debunked
                </div>
                <div className='text-lg'>
                    1 April 2023
                </div>
            </div>
        </div>
    )
}

export default BlogCard