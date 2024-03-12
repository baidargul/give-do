import Image from 'next/image'
import React from 'react'

type Props = {}

const CommentBox = (props: Props) => {
    return (
        <div className='flex flex-col gap-14 rounded-2xl p-5 w-[384px] bg-white shadow-[inset_-1px_0px_14px_0px_#00000024] hover:shadow-[inset_-1px_0px_14px_0px_rgba(231,66,75,.4)]'>
            <div className='text-[1.25rem] text-site-text-fundraiser_support_description'>
                People often wonder where the money would go. I can tell you, I started working with GiveIndia when the pandemic first broke a year ago. We validate them, it's a very good, reliable organization. People should have confidence in giving to GiveIndia and know that the money will be used immediately to help somebody.
            </div>
            <div className='flex gap-4 items-center'>
                <div>
                    <Image src={"/homepage/testimonials/1.jpg"} alt='testimonial' width={85} height={85} className='object-cover w-[85px] h-[85px] rounded-md' />
                </div>
                <div>
                    <div className='text-[1.25rem] font-semibold text-site-text-fundraiser_support_description'>Vinod Khosla</div>
                    <div>
                        <Image src={"/homepage/testimonials/sources/1.png"} alt='author' width={200} height={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentBox