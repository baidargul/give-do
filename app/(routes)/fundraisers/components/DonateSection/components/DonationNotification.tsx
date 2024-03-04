import React from 'react'

type Props = {}

const DonationNotification = (props: Props) => {
    return (
        <div className='my-4 text-sm text-center tablet:text-left font-medium bg-site-section-bg-donation_section text-site-text-donation_section rounded-lg py-2 px-4'>
            If 3 out of 5 people support,
            <span className='text-site-bg-redHighlight'> give.do </span>
            will donate 20% extra on your behalf
        </div>
    )
}

export default DonationNotification