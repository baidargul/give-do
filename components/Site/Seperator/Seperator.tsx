import React from 'react'

type Props = {
    type: 'horizontal' | 'vertical' | 'dotted'
}

const Seperator = (props: Props) => {
    const { type } = props

    if (type === 'horizontal') {
        return (
            <div className='w-full h-[1px] bg-slate-200 rounded-md'>

            </div>
        )
    } else if (type === 'vertical') {
        return (
            <div className='h-full w-[1px] bg-slate-200 rounded-md'>

            </div>
        )

    } else if (type === 'dotted') {
        return <div className='w-1 h-1 rounded-full bg-slate-500'></div>
    }
}

export default Seperator