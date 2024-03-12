import React from 'react'
import CommentBox from './CommentBox'

type Props = {}

const CommentsSection = (props: Props) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-12 w-fit'>
                <div className='flex flex-col gap-8'>
                    <CommentBox />
                    <CommentBox />
                </div>
                <div className='flex flex-col items-center gap-12 mt-20'>
                    <div className='text-[40px] w-[80%] text-center font-semibold'>
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

export default CommentsSection