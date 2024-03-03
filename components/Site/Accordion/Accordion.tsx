'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {
    isSelected?: boolean
    title: string
    content: string
}

const Accordion = (props: Props) => {
    const [isToggled, setIsToggled] = useState(false)
    const [togglePadding, setTogglePadding] = useState(false)
    const [selected, setSelected] = useState<boolean>(false)

    useEffect(() => {
        setSelected(props.isSelected ? true : false)
    }, [props.isSelected])

    useEffect(() => {
        if (selected === false) {
            setTogglePadding(false)
            setIsToggled(false)
        }
    }, [selected])

    const handleToggle = () => {
        setIsToggled(!isToggled)

        if (isToggled) {
            setTogglePadding(false)
        } else {
            setTimeout(() => {
                setTogglePadding(true)
            }, 300)
        }
    }

    return (
        <button onClick={handleToggle} className='bg-site-bg-accordion transition-all duration-500 p-8 rounded-2xl text-site-text-tag_first_donor text-[1.125rem] font-semibold cursor-pointer'>
            <div className='flex justify-between items-center transition-all duration-500'>
                <div className='text-start'>
                    {props.title}
                </div>
                <div>
                    <Image src={isToggled ? "/other/faq_minusIcon.png" : "/other/faq_plusIcon.png"} width={20} height={20} alt='faq' className='opacity-50' />
                </div>
            </div>
            <div className={`transition-all duration-500 pt-0 h-0 overflow-hidden ${isToggled ? 'h-auto' : 'h-0'} ${togglePadding && "pt-0"}`}>
                <p className={`text-sm transition-all duration-500 text-start leading-relaxed font-normal pt-4 ${togglePadding && "pt-0"} transition-all duration-500`}>
                    {props.content}
                </p>
            </div>

        </button>
    )
}

export default Accordion