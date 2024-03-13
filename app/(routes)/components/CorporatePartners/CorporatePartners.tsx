'use client'
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

const CorporatePartners = (props: Props) => {
    const [visibleItems, setVisibleItems] = useState(data.slice(0, 8));
    const [shouldFadeOut, setShouldFadeOut] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setShouldFadeOut(true);
            setTimeout(() => {
                setShouldFadeOut(false);
                const nextIndex = (currentIndex + 8) % data.length;
                setVisibleItems(data.slice(nextIndex, nextIndex + 8)); // Show next 8 items
                setCurrentIndex(nextIndex);
            }, 500); // Delay fade in by 500 milliseconds
        }, 2000); // Wait for 2 seconds before fading out

        return () => clearInterval(interval);
    }, [currentIndex]); // Trigger effect whenever currentIndex changes

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="text-[48px] font-semibold text-site-text-tag_first_donor">
                Our Corporate Partners
            </div>
            <div className="text-[20px] text-site-text-fundraiser_support_description">
                Trusted by the largest brands and corporations, and the most impactful foundations around the world
            </div>
            <div className={`flex gap-10 items-center transition-opacity duration-500 ${shouldFadeOut ? 'opacity-0' : 'opacity-100'}`}>
                {visibleItems.map((company: any, index: number) => (
                    <div key={company.name} className='drop-shadow-sm cursor-pointer'>
                        <Image src={company.image} width={130} height={130} alt='corporate' className='' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CorporatePartners;