import Tag from '@/components/Site/Tags/Tag'
import React from 'react'
import Body from './components/Body/Body'
import Image from 'next/image'
import OrganiserSection from './components/DonateSection/components/Organisers/OrganiserSection'
import TrustedPlatform from './components/MostTrustedOnlinePlatform/TrustedPlatform'
import FAQSection from './components/FAQs/Section'
import Title from './components/Title/Title'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='w-full'>
            <div className="phone:mx-0 tablet:mx-10 laptop:mx-40">
                <div>
                    <Title />
                </div>
                <div>
                    <Body />
                </div>
            </div>
            <div className=''>
                <TrustedPlatform />
            </div>
            <div className='mt-10'>
                {/* <FAQSection /> */}
            </div>
        </div>
    )
}

export default page