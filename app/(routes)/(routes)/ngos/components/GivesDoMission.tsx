'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'

type Props = {}

const GivesDoMission = (props: Props) => {
    const [isMounted, setIsMounted] = React.useState(false)
    const [showMore, setShowMore] = React.useState(false)


    useEffect(() => {
        setIsMounted(true)
    }, [])

    const handleReadMore = () => {
        setShowMore(!showMore)
    }

    return (
        isMounted && <div>
            <div className='text-[1.5rem] tablet:text-[24px] font-semibold mb-2'>
                What is Give.do’s mission?
            </div>

            <div className='relative'>
                <div className={`${showMore === false && "line-clamp-[3] tablet:line-clamp-[3]"} transition-all duration-500 overflow-hidden`}>
                    <div className={`flex flex-col gap-4 text-[16px] text-site-text-fundraiser_support_description tracking-wide leading-snug ${showMore === false && "h-20"}`}>
                        <div>
                            Give’s mission is to "make giving bigger and better." Give is the most trusted donation platform in India for fundraisers and crowdfunding campaigns. Through our technology solutions, we enable individuals and organisations to fundraise and donate to a cause, charity or NGO with trust and convenience. Give’s community of 2.7M+ individual donors and 300+ organisations supports 3,000+ verified nonprofits with 80G deduction and serves 15M+ people across India. Find a fundraiser today!
                        </div>
                    </div>
                    <button onClick={handleReadMore} className={`text-site-bg-redHighlight -bottom-5 absolute font-medium flex gap-1 items-center ${showMore && "-bottom-6"}`}>
                        <div>
                            Learn {showMore? "Less" :"More"} about Give
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

export default GivesDoMission