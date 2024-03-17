import React from 'react'

type Props = {
    title: string
    description: string
}

const PageHeading = (props: Props) => {
    return (
        <div className='flex flex-col justify-center items-center text-center bg-[#F8F1F1] p-28'>
            <div className='text-[48px] font-semibold'>{props.title}</div>
            <div className='text-site-text-fundraiser_support_description font-semibold text-[20px]'>{props.description}</div>
        </div>
    )
}

export default PageHeading