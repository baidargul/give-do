import BtnShare from '@/components/Site/Buttons/BtnShare'
import React from 'react'
import BlogsHolder from './BlogSection/BlogsHolder'

type Props = {}

type Blog = {
    title: string
    date: string
    image: string
}

const data: Blog[] = [
    {
        title: '7 myths about autism debunked',
        date: '1 April 2023',
        image: '/homepage/blog/1.jpg'
    },
    {
        title: '7 myths about autism debunked',
        date: '1 April 2023',
        image: '/homepage/blog/1.jpg'
    },
    {
        title: '7 myths about autism debunked',
        date: '1 April 2023',
        image: '/homepage/blog/1.jpg'
    },
    {
        title: '7 myths about autism debunked',
        date: '1 April 2023',
        image: '/homepage/blog/1.jpg'
    }
]

const BlogSection = (props: Props) => {
    return (
        <div className='flex gap-4 justify-between'>
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
            <div className='w-[72%]'>
                <BlogsHolder />
            </div>
        </div>
    )
}

export default BlogSection