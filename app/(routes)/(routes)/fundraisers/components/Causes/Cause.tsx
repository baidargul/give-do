import Image from 'next/image'
import React from 'react'

type Props = {
    title: string
    image: string
    setValue: any
    value: string
}

const Cause = (props: Props) => {

    const handleClick = () => {
        props.setValue(props.title)
    }

    return (
        <div onClick={handleClick} className='flex flex-col gap-3 items-center cursor-pointer'>
            <div>
                <Image src={props.title === props.value ? `${props.image}Red.png` : `${props.image}.png`} alt='all' width={48} height={48} />
            </div>
            <div>
                {props.title}
            </div>
        </div>
    )
}

export default Cause