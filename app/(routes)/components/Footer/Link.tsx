import React from 'react'

type Props = {
    name: string
    path?: string
}

const Link = (props: Props) => {
    return (
        <div className='flex flex-col font-medium tablet:font-normal gap-4 text-site-text-fundraiser_support_description cursor-pointer'>
            {props.name}
        </div>
    )
}

export default Link