import React from 'react'

type Props = {}

const BtnShare = (props: Props) => {
    return (
        <button className='text-sm text-site-button-share-text min-w-[150px] h-[44px] hover:text-site-button-share-text_hover font-semibold bg-white rounded-md  border border-site-button-share-border drop-shadow-sm'>
            Share
        </button>
    )
}

export default BtnShare