import Image from 'next/image'
import React from 'react'

type Props = {
    date?: string,
    title?: string,
    description?: string
    image?: string
}

const Update = (props: Props) => {
    return (
        <div className='w-full'>
            <div className="font-semibold  tracking-wide text-md">15 Feb, 2024</div>
            <div className="text-site-text-title font-bold">Heartfelt thanks to the generous donors making SAI's dream of rescuing children from red-light areas a reality!</div>
            <p>Take a look at how donated funds will be utilized to keep these kids safe and cared for.
                Despite the incredible work done so far, SAI needs more funds to achieve its goal of providing a safe home for the minor victims of sexual exploitation. Donate now!
            </p>
            <img src="/fundraisers/defaultPostImg.jpg" alt="update" height={"auto"} className='min-w-[100%]' />
        </div>
    )
}

export default Update