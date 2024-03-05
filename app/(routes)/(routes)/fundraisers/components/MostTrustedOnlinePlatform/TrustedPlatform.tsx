import React from 'react'
import Badge from './Badge'

type Props = {}

const TrustedPlatform = (props: Props) => {
    return (
        <div className='bg-site-bg-secondary px-4 tablet:px-0 py-10 w-full tablet:pt-12 tablet:pb-24 mt-14 tablet:flex flex-col gap-10 justify-center items-center'>
            <div className="text-lg tablet:text-[32px] my-4 tablet:my-2 font-semibold text-site-text-tag_recent_donor">India's most trusted online donation platform</div>
            <div className='tablet:flex-row flex flex-col justify-between items-start gap-8 tablet:gap-0'>
                <Badge type='Easy' key={1} />
                <Badge type='Impactful' key={2} />
                <Badge type='Credible' key={3} />
            </div>
        </div>
    )
}

export default TrustedPlatform