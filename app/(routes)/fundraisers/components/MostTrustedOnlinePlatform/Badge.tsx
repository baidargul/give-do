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
                <div className='flex tablet:flex-col tablet:justify-center items-center gap-4 tablet:w-96 tablet:text-center'>
                    <Image src='/other/Easy.jpg' className='rounded-full' width={50} height={50} alt='Donate quickly and seamlessly' />
                    <div>
                        <div className='text-[1.25rem] font-semibold'>Easy</div>
                        <div className='text-[1rem] text-site-text-fundraiser_support_description'>Donate quickly and seamlessly</div>
                    </div>
                </div>
            )

        case "Impactful":
            return (
                <div className='flex tablet:flex-col tablet:justify-center items-center gap-4 tablet:w-96 tablet:text-center'>
                    <Image src='/other/Impactful.jpg' className='rounded-full' width={50} height={50} alt='Champion causes close to your heart and change lives' />
                    <div>
                        <div className='text-[1.25rem] font-semibold'>Impactful</div>
                        <div className='text-[1rem] text-site-text-fundraiser_support_description'>Champion causes close to your heart and change lives</div>
                    </div>
                </div>
            )

        case "Credible":
            return (
                <div className='flex tablet:flex-col tablet:justify-center items-center gap-4 tablet:w-96 tablet:text-center'>
                    <Image src='/other/Credible.jpg' className='rounded-full' width={50} height={50} alt='Support 3,000+ certified Indian nonprofits' />
                    <div>   
                        <div className='text-[1.25rem] font-semibold'>Credible</div>
                        <div className='text-[1rem] text-site-text-fundraiser_support_description'>Support 3,000+ certified Indian nonprofits</div>
                    </div>
                </div>
            )

        default:
            break;
    }

    return (
        <div className='flex tablet:flex-col tablet:justify-center items-center gap-4 tablet:w-96 tablet:text-center'>
            <Image src='/other/Easy.jpg' className='rounded-full' width={50} height={50} alt='Donate quickly and seamlessly' />
            <div>
                <div className='text-[1.25rem] font-semibold'>Easy</div>
                <div className='text-[1rem] text-site-text-fundraiser_support_description'>Donate quickly and seamlessly</div>
            </div>
        </div>
    )
}

export default Badge