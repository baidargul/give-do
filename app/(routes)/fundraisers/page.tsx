import Tag from '@/components/Site/Tags/Tag'
import React from 'react'
import Body from './components/Body/Body'
import Image from 'next/image'
import OrganiserSection from './components/DonateSection/components/Organisers/OrganiserSection'
import TrustedPlatform from './components/MostTrustedOnlinePlatform/TrustedPlatform'
import FAQSection from './components/FAQs/Section'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='w-full'>
            <div className="px-40 pt-2">
                <div className="font-bold text-site-text-title text-4xl my-2">
                    Help Vinay bring children facing abuse in red-light areas to safety and protect them
                </div>
                <div className="text-lg flex gap-1 items-center">
                    <div>
                        Campaign by Social Activities Integration
                    </div>
                    <div>
                        <Tag type='TAX BENEFITS AVAILABLE' />
                    </div>
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