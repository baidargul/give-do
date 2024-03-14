'use client'
import React from 'react'
import Cause from './Cause'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

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
    const [selectedCause, setSelectedCause] = React.useState<string>('All Causes')

    const sectionArr = [];
    for (let i = 0; i < causes.length; i += 7) {
        sectionArr.push(causes.slice(i, i + 7));
    }

    return (
        <div className='w-full'>
            <Carousel>
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
    );
};

export default CausesSection