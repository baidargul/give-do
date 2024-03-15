'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

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

const CorporatePartners = (props: Props) => {
    const [visibleItems, setVisibleItems] = useState(data.slice(0, 8));
    const [shouldFadeOut, setShouldFadeOut] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false)

    const toShow = isMobile ? 8 : 8

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setShouldFadeOut(true);
            setTimeout(() => {
                setShouldFadeOut(false);
                const nextIndex = (currentIndex + toShow) % data.length;
                setVisibleItems(data.slice(nextIndex, nextIndex + toShow)); // Show next 8 items
                setCurrentIndex(nextIndex);
            }, 500); // Delay fade in by 500 milliseconds
        }, 2000); // Wait for 2 seconds before fading out

        return () => clearInterval(interval);
    }, [currentIndex]); // Trigger effect whenever currentIndex changes

    const chunkSize = 8
    let chunk: any = []
    const slides: any = []
    data.map((outer, index) => {
        if (index % chunkSize == 0) {
            slides.push(
                <div className='grid grid-cols-2 gap-2'>
                    {chunk}
                </div>
            )
            chunk = []
        }
        chunk.push(
            <div key={index} className='drop-shadow-sm cursor-pointer'>
                <Image src={outer.image} width={130} height={130} alt='corporate' className='' />
            </div>
        )
    })

    return (
        isMounted && <div className='flex flex-col justify-center items-center'>
            <div className="text-[1.2rem] tablet:text-[48px] font-semibold text-site-text-tag_first_donor">
                Our Corporate Partners
            </div>
            <div className="text-[.9rem] tablet:text-[20px] mt-2 tablet:mt-0 text-center tablet:text-left text-site-text-fundraiser_support_description">
                Trusted by the largest brands and corporations, and the most impactful foundations around the world
            </div>
            <div className={`flex tablet:gap-10 items-center transition-opacity duration-500 ${shouldFadeOut ? 'opacity-0' : 'opacity-100'}`}>
                {
                    isMobile && slides.map((slide: any, index: any) => (
                        <div key={index} className={`flex justify-center gap-2 ${shouldFadeOut ? 'opacity-0' : 'opacity-100'}`}>
                            {slide}
                        </div>
                    ))
                }

                {isMobile === false && visibleItems.map((company: any, index: number) => (
                    <div key={index} className='drop-shadow-sm cursor-pointer'>
                        <Image src={company.image} width={130} height={130} alt='corporate' className='' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CorporatePartners;