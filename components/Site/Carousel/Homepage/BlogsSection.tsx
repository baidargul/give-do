'use client'
import React, { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { type CarouselApi } from "@/components/ui/carousel"
import BlogCard from '../../Cards/BlogCard/BlogCard'

type Props = {}


const data = [
    {
        title: "This is new blog",
        date: "27-Mar-2024",
        image: "/homepage/blog/1.jpg"
    },
    {
        title: "This is new blog",
        date: "27-Mar-2024",
        image: "/homepage/blog/1.jpg"
    },
    {
        title: "This is new blog",
        date: "27-Mar-2024",
        image: "/homepage/blog/1.jpg"
    },
    {
        title: "This is new blog",
        date: "27-Mar-2024",
        image: "/homepage/blog/1.jpg"
    },
    {
        title: "This is new blog",
        date: "27-Mar-2024",
        image: "/homepage/blog/1.jpg"
    },
]

const BlogsSectionCoursel = (props: Props) => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    const chunkSize = 2
    const chunks = []
    for (let i = 0; i < data.length; i += chunkSize) {
        chunks.push(data.slice(i, i + chunkSize));
    }

    return (
        <div>
            <Carousel className="w-full" opts={{ loop: true, align: "start" }} plugins={[Autoplay({ delay: 5000, }),]} setApi={setApi}>
                <CarouselContent>
                    {/* Map over chunks and create a CarouselItem for each chunk */}
                    {chunks.map((chunk, index) => (
                        <CarouselItem key={index}>
                            {/* Render two BlogCard components for each chunk */}
                            <div className='flex gap-8 justify-center h-[380px]'>
                                {chunk.map((blog, index) => (
                                    <BlogCard key={index} {...blog} />
                                ))}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default BlogsSectionCoursel