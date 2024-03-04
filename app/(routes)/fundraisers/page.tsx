import React from 'react'
import Body from './components/Body/Body'
import TrustedPlatform from './components/MostTrustedOnlinePlatform/TrustedPlatform'
import FAQSection from './components/FAQs/Section'
import Title from './components/Title/Title'
import BtnShare from '@/components/Site/Buttons/BtnShare'

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
            <div className='mt-10 px-4 tablet:px-0'>
                <FAQSection />
            </div>
            <div className='bg-white p-2 drop-shadow-md w-full absolute'>
                <BtnShare caption='Give Now'/>
            </div>
        </div>
    )
}

export default page