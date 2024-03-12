import React from 'react'
import MainCard from './MainCard'
import SubCard from './SubCard'

type Props = {}

const Slide = (props: Props) => {
    return (
            <div className='w-full flex justify-between gap-4 items-center'>
                <MainCard />
                <MainCard />
                <div className='flex flex-col gap-4 justify-between items-center'>
                    <SubCard />
                    <SubCard />
                    <SubCard />
                </div>
            </div>
    )
}

export default Slide