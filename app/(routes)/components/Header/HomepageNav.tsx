import SiteLogo from '@/components/Site/Logo/SiteLogo'
import Image from 'next/image'
import React from 'react'

type Props = {}

const HomepageNav = (props: Props) => {
    return (
        <div className='flex justify-between items-center phone:mx-0 tablet:mx-10 laptop:mx-40 mb-2 tablet:mb-5 pt-5 px-4 tablet:px-0'>
            <div className='w-[92.63px] h-[44px]'>
                <SiteLogo />
            </div>
            <div className='flex justify-between gap-4 items-center cursor-pointer'>
                <div className='flex gap-2 items-center'>
                    <div className='pointer-events-none fill-site-redHighlight'><Image src={"/other/searchRed.png"} width={18} height={18} alt='find fundraisers' /></div>
                    <div className='hidden tablet:block text-[16px] text-site-text-fundraiser_support_description'>Find Fundraisers</div>
                </div>
                <div>
                    <Image src={"/profiles/default.jpg"} width={40} height={40} className='w-[40px] h-[40px] rounded-full' alt='user' />
                </div>
            </div>
        </div>
    )
}

export default HomepageNav