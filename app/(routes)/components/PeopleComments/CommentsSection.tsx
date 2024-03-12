import React from 'react'
import CommentBox from './CommentBox'

type Props = {}

const CommentsSection = (props: Props) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-12'>
                <CommentBox/>
            </div>
        </div>
    )
}

export default CommentsSection