import React from 'react'

type Props = {
    city: string
}

const NGOinCityCard = (props: Props) => {
    return (
        <div>
            <div className='text-[20px] font-medium text-site-text-tag_first_donor py-5 border-b border-site-text-fundraiser_support_description/20'>
                NGOs in {props.city}
            </div>
        </div>
    )
}

export default NGOinCityCard