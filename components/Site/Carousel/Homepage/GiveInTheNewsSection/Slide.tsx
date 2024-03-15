import React from 'react'
import MainCard from './MainCard'
import SubCard from './SubCard'

type Chunk = {
    title: string,
    image: string,
    date: string,
    source: string
}

type Props = {
    chunk: Chunk[]
}

const Slide = (props: Props) => {
    const { chunk } = props
    return (
        <div>
            {/**for tablet */}
            <div className='hidden tablet:flex w-full h-[490px] justify-between gap-4 items-center pr-10'>
                {chunk.slice(0, 2).map((item, index) => (
                    <MainCard key={index} item={item} />
                ))}
                <div className='flex flex-col gap-4 justify-between items-center'>
                    {chunk.slice(2).map((item, index) => (
                        <SubCard key={index} item={item} />
                    ))}
                </div>
            </div>
            {/** for phone */}
            <div className='flex tablet:hidden flex-col gap-4 justify-between items-center mb-24 tablet:mb-0'>
                    {chunk.map((item, index) => (
                        <SubCard key={index} item={item} />
                    ))}
                </div>
        </div>
    )
}

export default Slide