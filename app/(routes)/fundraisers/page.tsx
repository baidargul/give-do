import Tag from '@/components/Site/Tags/Tag'
import React from 'react'
import UpdateSection from './components/Updates/UpdateSection'
import Story from './components/Story/Story'
import SupportSection from './components/SupportTheFundRaiser/SupportSection'
import DonateSection from './components/DonateSection/Section'

type Props = {}

const page = (props: Props) => {
    return (
        <div className="">
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
            <div className="flex justify-between gap-10">
                <div className='w-[70%]'>
                    <div className='border p-2 border-dashed border-slate-400 rounded-md text-center mt-4 h-52 flex items-center justify-between'>
                        Image / Video
                    </div>
                    <div>
                        <Story />
                    </div>

                    <div>
                        <UpdateSection />
                    </div>

                    <div>
                        <SupportSection />
                    </div>

                </div>
                <div className='w-[38%]'>
                    <DonateSection />
                </div>
            </div>
        </div>
    )
}

export default page