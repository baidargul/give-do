import Tag from '@/components/Site/Tags/Tag'
import React from 'react'
import Body from './components/Body/Body'

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
            <div>
                <Body />
            </div>
            <div>
                This asdasdas dasd asdasd asdas
            </div>
        </div>
    )
}

export default page