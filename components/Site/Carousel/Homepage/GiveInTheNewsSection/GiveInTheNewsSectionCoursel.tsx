'use client'
import React, { useEffect } from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import Slide from './Slide'
import { isMobile } from 'react-device-detect';

type Props = {}

const data = [
    {
        title: 'Give in the News',
        image: '/homepage/giveinthenews/1.jpg',
        date: '2021-10-10',
        source: "/homepage/giveinthenews/sources/1.jpg"
    },
    {
        title: 'Give in the News',
        image: '/homepage/giveinthenews/1.jpg',
        date: '2021-10-10',
        source: "/homepage/giveinthenews/sources/1.jpg"
    },
    {
        title: 'Give in the News',
        image: '/homepage/giveinthenews/1.jpg',
        date: '2021-10-10',
        source: "/homepage/giveinthenews/sources/1.jpg"
    },
    {
        title: 'Give in the News',
        image: '/homepage/giveinthenews/1.jpg',
        date: '2021-10-10',
        source: "/homepage/giveinthenews/sources/1.jpg"
    },
    {
        title: 'Give in the News',
        image: '/homepage/giveinthenews/1.jpg',
        date: '2021-10-10',
        source: "/homepage/giveinthenews/sources/1.jpg"
    },
    {
        title: 'Give in the News',
        image: '/homepage/giveinthenews/1.jpg',
        date: '2021-10-10',
        source: "/homepage/giveinthenews/sources/1.jpg"
    },
    {
        title: 'Give in the News',
        image: '/homepage/giveinthenews/1.jpg',
        date: '2021-10-10',
        source: "/homepage/giveinthenews/sources/1.jpg"
    },
    {
        title: 'Give in the News',
        image: '/homepage/giveinthenews/1.jpg',
        date: '2021-10-10',
        source: "/homepage/giveinthenews/sources/1.jpg"
    },
    {
        title: 'Give in the News',
        image: '/homepage/giveinthenews/1.jpg',
        date: '2021-10-10',
        source: "/homepage/giveinthenews/sources/1.jpg"
    },
    {
        title: 'Give in the News',
        image: '/homepage/giveinthenews/1.jpg',
        date: '2021-10-10',
        source: "/homepage/giveinthenews/sources/1.jpg"
    },
    {
        title: 'Give in the News',
        image: '/homepage/giveinthenews/1.jpg',
        date: '2021-10-10',
        source: "/homepage/giveinthenews/sources/1.jpg"
    },
    {
        title: 'Give in the News',
        image: '/homepage/giveinthenews/1.jpg',
        date: '2021-10-10',
        source: "/homepage/giveinthenews/sources/1.jpg"
    },
    {
        title: 'Give in the News asdasdas asdasdasda sdasd asd',
        image: '/homepage/giveinthenews/1.jpg',
        date: '2021-10-10',
        source: "/homepage/giveinthenews/sources/1.jpg"
    },
]

const GiveInTheNewsSectionCoursel = (props: Props) => {
    const [api, setApi] = React.useState<any>()
    const [isMounted, setIsMounted] = React.useState(false)

    useEffect(() => { 
        setIsMounted(true)
    }, [])

    const chunkSize = isMobile ? 3 : 5
    const chunks = []
    for (let i = 0; i < data.length; i += chunkSize) {
        chunks.push(data.slice(i, i + chunkSize));
    }

    return (
        isMounted && <div className='-mt-10 tablet:mt-0'>
            <Carousel className="w-full" opts={{ loop: true, align: "start" }} plugins={[Autoplay({ delay: 5000, }),]} setApi={setApi}>
                <CarouselContent>
                    {
                        chunks.map((chunk, index) => {
                            return (
                                <CarouselItem key={index}>
                                    <Slide chunk={chunk} />
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default GiveInTheNewsSectionCoursel