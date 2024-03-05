import React from 'react'

type Props = {}

const Skeleton = (props: Props) => {
    return (
        <div>
            <div className='bg-gray-200 p-5 tablet:p-8 rounded-2xl animate-pulse cursor-wait'>
                <div className='flex justify-between items-center'>
                    <div className='w-3/4 h-6 bg-gray-300 rounded'></div>
                    <div className='w-6 h-6 bg-gray-300 rounded'></div>
                </div>
                <div className='h-0 overflow-hidden'>
                    <div className='h-4 bg-gray-300 rounded mt-3'></div>
                    <div className='h-4 bg-gray-300 rounded mt-1'></div>
                    <div className='h-4 bg-gray-300 rounded mt-1'></div>
                    <div className='h-4 bg-gray-300 rounded mt-1'></div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton