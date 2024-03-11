import Image from 'next/image'
import React from 'react'

type Props = {}

const TrustedNGOs = (props: Props) => {
    return (
        <div>
            <div className='text-[40px] font-semibold text-site-text-tag_top_donor'>
                Our trusted NGO partners
            </div>
            <div className='text-[20px] text-site-text-fundraiser_support_description mb-16'>
                We have been raising funds for credible nonprofits for 20+ years
            </div>
            <div className='grid grid-cols-6 gap-2 w-full'>
                <div className='w-[176px] h-[140px] flex justify-center items-center bg-site-text-fundraiser_support_description/5 rounded-2xl'>
                    <Image src={"/homepage/trustedNGOs/1.jpg"} width={72} height={72} alt='NGO' />
                </div>
                <div className='w-[176px] h-[140px] flex justify-center items-center bg-site-text-fundraiser_support_description/5 rounded-2xl'>
                    <Image src={"/homepage/trustedNGOs/1.jpg"} width={72} height={72} alt='NGO' />
                </div>
                <div className='w-[176px] h-[140px] flex justify-center items-center bg-site-text-fundraiser_support_description/5 rounded-2xl'>
                    <Image src={"/homepage/trustedNGOs/1.jpg"} width={72} height={72} alt='NGO' />
                </div>
                <div className='w-[176px] h-[140px] flex justify-center items-center bg-site-text-fundraiser_support_description/5 rounded-2xl'>
                    <Image src={"/homepage/trustedNGOs/1.jpg"} width={72} height={72} alt='NGO' />
                </div>
                <div className='w-[176px] h-[140px] flex justify-center items-center bg-site-text-fundraiser_support_description/5 rounded-2xl'>
                    <Image src={"/homepage/trustedNGOs/1.jpg"} width={72} height={72} alt='NGO' />
                </div>
                <div className='w-[176px] h-[140px] flex justify-center items-center bg-site-text-fundraiser_support_description/5 rounded-2xl'>
                    <Image src={"/homepage/trustedNGOs/1.jpg"} width={72} height={72} alt='NGO' />
                </div>
            </div>
        </div>
    )
}

export default TrustedNGOs