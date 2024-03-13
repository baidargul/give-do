'use client'
import React, { useEffect, useRef, useState } from 'react';

type Props = {
    children: React.ReactNode; // Assuming the content is just text now
    lines: number;
    height: number;
};

const ReadMoreSection = (props: Props) => {
    const [showMore, setShowMore] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const lineHeightRef: any = React.useRef(null);
    const [maxHeight, setMaxHeight] = useState(0);

    const lines = props.lines ? props.lines : 2;

    useEffect(() => {
        setIsMounted(true);

        const calculateLineHeight = () => {
            const temp = parseInt(getComputedStyle(document.documentElement).lineHeight, 10);
            lineHeightRef.current = temp;
            setMaxHeight(temp * lines);
        };

        calculateLineHeight(); // Call the function directly on initial render
    }, [lines]);

    const handleReadMore = () => {
        setShowMore(!showMore);
        setMaxHeight(showMore ? props.height : lineHeightRef.current * lines); // Use ref value
    };

    const contentStyle = {
        maxHeight: lineHeightRef.current ? lineHeightRef.current * lines : 0, // Handle potential initial null ref value
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    return (
        isMounted && (
            <div className="relative">
                <div className={`flex flex-col gap-4 text-[16px] text-site-text-fundraiser_support_description tracking-wide leading-snug`} style={contentStyle}>
                    {props.children}
                </div>
                <button onClick={handleReadMore} className={`text-site-bg-redHighlight -bottom-5 absolute font-medium ${showMore && "-bottom-6"}`}>
                    {showMore ? "Show Less" : "Read More"}
                </button>
                <div className={`h-[${props.height}px] w-full bg-gradient-to-t from-white to-transparent absolute bottom-0 ${showMore && "hidden"}`}></div>
            </div>
        )
    );
};

export default ReadMoreSection;