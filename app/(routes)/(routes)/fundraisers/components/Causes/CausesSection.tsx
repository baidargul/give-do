'use client'
import React, { useEffect } from 'react'
import Cause from './Cause'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'

type Props = {}

const causes = [
    {
        title: "All Causes",
        image: "/causes/All"
    },
    {
        title: "Animal",
        image: "/causes/Animal"
    },
    {
        title: "Arts Culture",
        image: "/causes/ArtsCulture"
    },
    {
        title: "Children",
        image: "/causes/Children"
    },
    {
        title: "Differently Abled",
        image: "/causes/DifferentlyAbled"
    },
    {
        title: "Disaster Relief",
        image: "/causes/DisasterRelief"
    },
    {
        title: "Elderly",
        image: "/causes/Elderly"
    },
    {
        title: "Environment",
        image: "/causes/Environment"
    },
    {
        title: "Health",
        image: "/causes/Health"
    },
    {
        title: "Human Rights",
        image: "/causes/HumanRights"
    },
    {
        title: "Poverty",
        image: "/causes/Poverty"
    },
    {
        title: "Sports",
        image: "/causes/Sports"
    },
    {
        title: "Women",
        image: "/causes/Women"
    },
]

const CausesSection = (props: Props) => {
    const [isMounted, setIsMounted] = React.useState<boolean>(false)
    const [selectedCause, setSelectedCause] = React.useState<string>('All Causes')
    const [api, setApi] = React.useState<any>()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const sectionArr = [];
    for (let i = 0; i < causes.length; i += 7) {
        sectionArr.push(causes.slice(i, i + 7));
    }

    const handlePreviousClick = () => {
        console.log(api)
        api.scrollPrev()
        console.log(api?.canScrollNext())

    }

    const handleNextClick = () => {
        console.log(api)
        api.scrollNext()
        console.log(api?.canScrollPrev())
    }

    return (
        isMounted && <div className='w-full flex justify-between items-center gap-8'>
            <div onClick={handlePreviousClick} className='bg-white w-25 h-25 rounded-full drop-shadow-md w-fit cursor-pointer'>
                <Image src={api?.canScrollPrev() ? "/other/PreviousRed.png" : "/other/Previous.png"} alt={"previousRow"} width={36} height={36} />
            </div>
            <div className='w-full'>
                <Carousel setApi={setApi}>
                    <CarouselContent>
                        {sectionArr.map((section, index) => (
                            <CarouselItem key={index} className="flex justify-between items-center">
                                {section.map((cause, causeIndex) => (
                                    <Cause
                                        key={causeIndex}
                                        title={cause.title}
                                        image={cause.image}
                                        setValue={setSelectedCause}
                                        value={selectedCause}
                                    />
                                ))}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <div onClick={handleNextClick} className='bg-white w-25 h-25 rounded-full drop-shadow-md w-fit cursor-pointer'>
                <Image src={"/other/Previous.png"} alt={"previousRow"} width={36} height={36} className='rotate-180' />
            </div>
        </div>
    );
};

export default CausesSection