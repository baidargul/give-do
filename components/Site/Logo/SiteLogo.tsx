import Image from 'next/image';
import React from 'react';

type Props = {
    size?: number;
};

const SiteLogo = (props: Props) => {
    const calculateHeight = (width: number, aspectRatio: number) => {
        return width * aspectRatio;
    };

    const width = props.width ? props.width : 92.63;
    const aspectRatio = 44 / 92.63; // Calculate aspect ratio (height / width)
    const height = calculateHeight(width, aspectRatio);

    return (
        <div className={`w-${width} h-${height}`}>
            <Image src={"/logo.png"} width={width} height={height} alt='site-logo' />
        </div>
    );
};

export default SiteLogo;
