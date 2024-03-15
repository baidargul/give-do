'use client'
import React, { useEffect, useState } from 'react'
import CommentBox from './CommentBox'
import { isMobile } from 'react-device-detect'

type Props = {}

const CommentsSection = (props: Props) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])


    if (isMobile) {
        return (
            isMounted &&  <div>
                <div className='text-[1.5rem] tablet:w-[80%] tablet:text-center font-bold'>
                    Here’s what people say about <span className='text-site-redHighlight font-bold'>give</span>
                </div>
                <div className='flex flex-col gap-6'>
                    <CommentBox />
                    <CommentBox />
                    <CommentBox />
                    <CommentBox />
                </div>
            </div>
        )
    } else {
        return (
            isMounted && <div className='-mt-10 tablet:mt-0'>
                <div className='text-[1.5rem] tablet:hidden w-[80%] tablet:text-center font-bold'>
                    Here’s what people say about <span className='text-site-redHighlight font-bold'>give</span>
                </div>
                <div className='flex flex-col gap-2 tablet:grid tablet:grid-cols-3 tablet:gap-12 w-fit'>
                    <div className='flex flex-col gap-8'>
                        <CommentBox />
                        <CommentBox />
                    </div>
                    <div className='flex flex-col items-center tablet:gap-12 tablet:mt-20'>
                        <div className='hidden tablet:block text-[2.5rem] w-[80%] text-center font-bold'>
                            Here’s what people say about <span className='text-site-redHighlight font-bold'>give</span>
                        </div>
                        <CommentBox />
                    </div>
                    <div className='flex flex-col gap-8'>
                        <CommentBox />
                        <CommentBox />
                    </div>
                </div>
            </div>
        )
    }



}

export default CommentsSection