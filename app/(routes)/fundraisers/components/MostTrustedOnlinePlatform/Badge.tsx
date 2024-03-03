import Image from 'next/image'
import React from 'react'

type Props = {
    type: "Easy" | "Impactful" | "Credible"
}

const Badge = (props: Props) => {
    const type = props.type

    switch (type) {
        case "Easy":
            return (
                <div className='flex flex-col justify-center items-center gap-4 w-96 text-center'>
                    <Image src='/other/Easy.jpg' className='rounded-full' width={50} height={50} alt='Donate quickly and seamlessly' />
                    <div className='text-[1.25rem] font-semibold'>Easy</div>
                    <div className='text-[1rem] text-site-text-fundraiser_support_description'>Donate quickly and seamlessly</div>
                </div>
            )

        case "Impactful":
            return (
                <div className='flex flex-col justify-center items-center gap-4 w-96 text-center'>
                    <Image src='/other/Impactful.jpg' className='rounded-full' width={50} height={50} alt='Champion causes close to your heart and change lives' />
                    <div className='text-[1.25rem] font-semibold'>Impactful</div>
                    <div className='text-[1rem] text-site-text-fundraiser_support_description'>Champion causes close to your heart and change lives</div>
                </div>
            )

        case "Credible":
            return (
                <div className='flex flex-col justify-center items-center gap-4 w-96 text-center'>
                    <Image src='/other/Credible.jpg' className='rounded-full' width={50} height={50} alt='Support 3,000+ certified Indian nonprofits' />
                    <div className='text-[1.25rem] font-semibold'>Credible</div>
                    <div className='text-[1rem] text-site-text-fundraiser_support_description'>Support 3,000+ certified Indian nonprofits</div>
                </div>
            )

        default:
            break;
    }

    return (
        <div className='flex flex-col justify-center items-center gap-4 w-96 text-center'>
            <Image src='/other/Easy.jpg' className='rounded-full' width={50} height={50} alt='Donate quickly and seamlessly' />
            <div className='text-[1.25rem] font-semibold'>Easy</div>
            <div className='text-[1rem] text-site-text-fundraiser_support_description'>Donate quickly and seamlessly</div>
        </div>
    )
}

export default Badge