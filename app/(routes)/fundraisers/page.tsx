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
            <div className='bg-white p-3 w-full bottom-0 z-20 fixed' style={{ boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.16)" }}>
                <BtnShare caption='Give Now' red />
            </div>
        </div>
    )
}

export default page