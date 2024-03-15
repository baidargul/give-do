'use client'
import FadeInOutProvider from '@/components/FadeInOut/FadeInOutProvider'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {}

const data = [
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/1.jpg",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/2.png",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/2.png",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/1.jpg",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/2.png",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/2.png",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/1.jpg",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/2.png",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/2.png",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/1.jpg",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/2.png",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/2.png",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/1.jpg",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/2.png",
    },
    {
        name: "Adobe",
        image: "/homepage/corporatepartners/2.png",
    },

]

const TrustedNGOs = (props: Props) => {
    const [visibleItems, setVisibleItems] = useState(data.slice(0, 6));
    const [shouldFadeOut, setShouldFadeOut] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setShouldFadeOut(true);
            setTimeout(() => {
                setShouldFadeOut(false);
                const nextIndex = (currentIndex + 6) % data.length;
                setVisibleItems(data.slice(nextIndex, nextIndex + 6)); // Show next <number> items
                setCurrentIndex(nextIndex);
            }, 500); // Delay fade in by 500 milliseconds
        }, 2000); // Wait for 2 seconds before fading out

        return () => clearInterval(interval);
    }, [currentIndex]); // Trigger effect whenever currentIndex changes


    const chunkSize = 6;
    const slides: any = []
    let chunk: any = []
    data.map((inner, index) => {
        if (index % chunkSize === 0) {
            slides.push(
                <div className='grid grid-cols-2 gap-2'>
                    {chunk}
                </div>
            )
            chunk = []
        }
        chunk.push(
            <div key={index} className='drop-shadow-sm cursor-pointer'>
                <Image src={inner.image} width={130} height={130} alt='corporate' className='' />
            </div>
        )
    })

    return (
        <div className=''>
            <div className='text-[1.5rem] tablet:text-[40px] font-semibold text-site-text-tag_top_donor'>
                Our trusted NGO partners
            </div>
            <div className='text-[1rem] tablet:text-[20px] text-site-text-fundraiser_support_description mb-5'>
                We have been raising funds for credible nonprofits for 20+ years
            </div>
            <div className='tablet:hidden flex justify-center'>
                <FadeInOutProvider content={slides} itemsToShow={1} />
            </div>
            <div className={`hidden tablet:flex gap-10 justify-between items-center transition-opacity duration-500 ${shouldFadeOut ? 'opacity-0' : 'opacity-100'}`}>
                {visibleItems.map((company: any, index: number) => (
                    <div key={index} className='drop-shadow-sm cursor-pointer'>
                        <Image src={company.image} width={130} height={130} alt='corporate' className='' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrustedNGOs