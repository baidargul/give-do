'use client'
import React, { useEffect, useState } from 'react'

type Props = {
    content: any[]
    itemsToShow?: number
    fadeOutDuration?: number
    delay?: number
}

const FadeInOutProvider = (props: Props) => {
    const data = props.content;
    const itemsToShow = props.itemsToShow ? props.itemsToShow : 6;
    const fadeOutDuration = props.fadeOutDuration ? props.fadeOutDuration : 500;
    const delay = props.delay ? props.delay : 2000;
    const [visibleItems, setVisibleItems] = useState(data.slice(0, itemsToShow));
    const [shouldFadeOut, setShouldFadeOut] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setShouldFadeOut(true);
            setTimeout(() => {
                setShouldFadeOut(false);
                const nextIndex = (currentIndex + itemsToShow) % data.length;
                setVisibleItems(data.slice(nextIndex, nextIndex + itemsToShow)); // Show next <number> items
                setCurrentIndex(nextIndex);
            }, fadeOutDuration); // Delay fade in by 500 milliseconds
        }, delay); // Wait for 2 seconds before fading out

        return () => clearInterval(interval);
    }, [currentIndex]); // Trigger effect whenever currentIndex changes

    return (
        <div className={`flex gap-10 justify-between items-center transition-opacity duration-500 ${shouldFadeOut ? 'opacity-0' : 'opacity-100'}`}>
            {visibleItems.map((content: React.ReactNode, index: number) => (
                <div key={index}>
                    {content}
                </div>
            ))}
        </div>
    )
}

export default FadeInOutProvider