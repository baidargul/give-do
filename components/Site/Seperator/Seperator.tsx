import React from 'react'

type Props = {
    type: 'horizontal' | 'vertical'
}

const Seperator = (props: Props) => {
    const { type } = props

    if (type === 'horizontal') {
        return (
            <div className='w-full h-[1px] bg-slate-200 rounded-md'>

            </div>
        )
    } else{
        return (
            <div className='h-full w-[1px] bg-slate-200 rounded-md'>

            </div>
        )
    
    }
}

export default Seperator