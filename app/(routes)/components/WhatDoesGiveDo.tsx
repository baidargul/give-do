'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'

type Props = {}

const WhatDoesGiveDo = (props: Props) => {
    const [showMore, setShowMore] = React.useState(false)
    const [isMounted, setIsMounted] = React.useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const handleReadMore = () => {
        setShowMore(!showMore)
    }


    return (
        isMounted && <div>
            <div className='text-[1.5rem] tablet:text-[24px] font-semibold mb-2'>
                What does <span className='text-site-redHighlight'>give</span> do?
            </div>

            <div className='relative'>
                <div className={`${showMore === false && "line-clamp-[9] tablet:line-clamp-[3]"} transition-all duration-500 overflow-hidden`}>
                    <div className={`flex flex-col gap-4 text-[16px] text-site-text-fundraiser_support_description tracking-wide leading-snug ${showMore === false && "h-20"}`}>
                        <div>
                            Give’s mission is to make giving bigger and better. We are the most trusted giving platform in India. Through our technology solutions and services, we enable individuals and organizations to raise funds for, and donate to any cause they care about, with trust and convenience. Our community of 2.7M+ individual donors and 300+ organizations supports 3,000+ verified nonprofits, serving 15M+ people across the country. Give exists to alleviate poverty by enabling the world to give. Established in 2000, Give, together with its partners, is the largest and most trusted giving platform in India.
                        </div>
                        <div>
                            One of the most impactful ways to enable giving is through online fundraisers on the give.do platform from verified NGOs. Thousands of NGOs fundraise on give.do. Some of the causes for which funds are raised on give.do include poverty alleviation, education of less privileged children; elderly care, differently abled, animal welfare, human rights and many others. Some of the most well-known ones are <span className='text-site-redHighlight'>Bhumi</span>, <span className='text-site-redHighlight'>Goonj</span>, <span className='text-site-redHighlight'>Smile Foundation</span>, <span className='text-site-redHighlight'>Cuddles Foundation</span> and <span className='text-site-redHighlight'>HelpAge India</span>. Each fundraiser is an opportunity for a donor or a potential donor to learn about an issue such as poverty or education, explore the NGO’s solution to the issue, make a donation and become a part of improving countless lives.
                        </div>
                        <div>
                            Through its seamless donation experience on the platform, give.do fosters a culture of giving that is both simple and has a massive impact. Indian donors qualify for a tax deduction under section <span className='text-site-redHighlight'>80G of the Income Tax Act of India</span>.
                        </div>
                    </div>
                    <button onClick={handleReadMore} className={`text-site-bg-redHighlight -bottom-5 absolute font-medium flex gap-1 items-center ${showMore && "-bottom-6"}`}>
                        <div>
                            Learn More
                        </div>
                        <div>
                            <Image src={"/other/icon-down.png"} width={20} height={20} alt="down" />
                        </div>
                    </button>
                    <div className={`h-28 w-full bg-gradient-to-t from-[#FAF9F9] to-transparent absolute bottom-0 ${showMore && "hidden"}`}></div>
                </div>
            </div>
        </div>
    )
}

export default WhatDoesGiveDo