'use client'
import React from 'react'
import MainCard from './MainCard'
import SubCard from './SubCard'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import Slide from './Slide'

type Props = {}

const GiveInTheNewsSectionCoursel = (props: Props) => {
    const [api, setApi] = React.useState<any>()
    return (
        <Carousel className="w-full" opts={{ loop: true, align: "start" }} plugins={[Autoplay({ delay: 5000, }),]} setApi={setApi}>
            <CarouselContent>
                <CarouselItem>
                    <Slide />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}

export default GiveInTheNewsSectionCoursel