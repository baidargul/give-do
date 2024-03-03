import Image from 'next/image'
import React from 'react'
import Badge from './Badge'

type Props = {}

const TrustedPlatform = (props: Props) => {
    return (
        <div className='bg-site-bg-secondary w-full pt-12 pb-24 mt-14 flex flex-col gap-10 justify-center items-center'>
            <div className="text-[32px] my-2 font-semibold text-site-text-tag_recent_donor">India's most trusted online donation platform</div>
            <div className='flex justify-between items-start'>
                <Badge type='Easy' key={1} />
                <Badge type='Impactful' key={2} />
                <Badge type='Credible' key={3} />
            </div>
        </div>
    )
}

export default TrustedPlatform