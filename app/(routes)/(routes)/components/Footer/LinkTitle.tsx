import React from 'react'

type Props = {
    name: string
}

const LinkTitle = (props: Props) => {
    return (
        <div id='title' className='text-[1.125rem] w-[80%] tablet:w-auto text-site-text-tag_first_donor flex flex-col gap-4 font-medium'>
            {props.name}
        </div>
    )
}

export default LinkTitle