import BtnShare from '@/components/Site/Buttons/BtnShare'
import BlogCard from '@/components/Site/Cards/BlogCard/BlogCard'
import React from 'react'

type Props = {}

const BlogSection = (props: Props) => {
    return (
        <div className='flex gap-4'>
            <div className='flex flex-col gap-4 w-[35%]'>
                <div className='text-[40px] font-semibold text-site-text-tag_top_donor'>
                    Blog
                </div>
                <div className='text-[1.25rem] text-site-text-fundraiser_support_description'>
                    Packed with information, initiatives and impact of the social sector
                </div>
                <div className='w-fit'>
                    <BtnShare caption='Learn More' />
                </div>
            </div>
            <div className='w-full'>
                <BlogCard />
            </div>
        </div>
    )
}

export default BlogSection