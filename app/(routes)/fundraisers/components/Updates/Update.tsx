'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'

type Props = {
    date?: string,
    title?: string,
    description?: string
    image?: string
}

const Update = (props: Props) => {
    const [showMore, setShowMore] = React.useState(false)
    const [isMounted, setIsMounted] = React.useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const handleReadMore = () => {
        setShowMore(!showMore)
    }

    return (
      isMounted &&  <div className='w-full'>
            <div className='flex flex-col gap-10 tablet:gap-4'>
                <div className='relative'>
                    <div className="font-semibold  tracking-wide text-md">15 Feb, 2024</div>
                    <div className="text-site-text-title font-bold">Heartfelt thanks to the generous donors making SAI's dream of rescuing children from red-light areas a reality!</div>
                    <p className={`${showMore === false && "line-clamp-[5]"}`}>Take a look at how donated funds will be utilized to keep these kids safe and cared for.
                        Despite the incredible work done so far, SAI needs more funds to achieve its goal of providing a safe home for the minor victims of sexual exploitation. Donate now!
                    </p>
                    <button onClick={handleReadMore} className={`text-site-bg-redHighlight z-10 -bottom-5 absolute tablet:hidden font-medium ${showMore && "-bottom-6"}`}>{showMore ? "Show Less" : "Read More"}</button>
                    <div className={`h-44 w-full bg-gradient-to-t from-white to-transparent absolute bottom-0 ${showMore && "hidden"} tablet:hidden`}></div>
                </div>
                <img src="/fundraisers/defaultPostImg.jpg" alt="update" height={"auto"} className='min-w-[100%]' />
            </div>
        </div>
    )
}

export default Update