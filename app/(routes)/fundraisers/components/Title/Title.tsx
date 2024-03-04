import Tag from '@/components/Site/Tags/Tag'
import React from 'react'

type Props = {}

const Title = (props: Props) => {
    return (
        <div className=''>
            <div className="tablet:hidden border mb-5 p-2 border-dashed border-slate-400 rounded-md text-center h-52 flex items-center justify-between">
                Image / Video
            </div>
            <div className='p-4 tablet:p-0'>
                <div className='block  tablet:hidden'>
                    <Tag type='TAX BENEFITS AVAILABLE' />
                </div>
                <div className="font-bold text-site-text-title text-[1.125rem] tablet:text-4xl my-2">
                    Help Vinay bring children facing abuse in red-light areas to safety and protect them
                </div>
                <div className="text-lg flex gap-1 items-center">
                    <div className='text-base'>
                        Campaign by Social Activities Integration
                    </div>
                    <div className='hidden tablet:block'>
                        <Tag type='TAX BENEFITS AVAILABLE' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title