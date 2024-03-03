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
            <div className="px-40 pt-2">
                <div>
                    <Title />
                </div>
                <div>
                    <Body />
                </div>
            </div>
            <div>
                <TrustedPlatform />
            </div>
            <div className='mt-10'>
                <FAQSection />
            </div>
        </div>
    )
}

export default page