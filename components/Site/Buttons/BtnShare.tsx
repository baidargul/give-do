'use client'
import React, { useEffect, useRef } from 'react'
import './button.css'
import Image from 'next/image'

type Props = {
    caption?: string
    red?: boolean
    textSize?: string
    icon?: string
}

const BtnShare = (props: Props) => {
    const buttonRef: any = useRef();
    const [isMounted, setIsMounted] = React.useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        const applyContainerProperties = () => {
            buttonRef.current?.classList.add("effect-container")
        }
        applyContainerProperties()

        const onClick = () => {
            buttonRef.current?.classList.remove("active")
            buttonRef.current?.classList.add("active")
        }

        buttonRef.current?.addEventListener("mouseup", onClick)


        return () => {
            buttonRef.current?.removeEventListener("mouseup", onClick)
        }

    }, [])

    const textSize = props.textSize ? props.textSize : "text-sm"

    return (
        isMounted && <div ref={buttonRef} className={`${props.icon && "relative"}`}>
            <button id='button' className={`${textSize} ${props.red === true ? "text-white bg-site-redHighlight hover:bg-site-redHighlightHover" : "text-site-button-share-text hover:text-site-button-share-text_hover border-site-button-share-border bg-white"}  min-w-[150px] w-full h-[44px]  font-semibold  rounded-md  border  drop-shadow-sm`}>
                {props.caption ? props.caption : "Share"}
            </button>
            {props.icon && <Image src={props.icon} alt='search' width={20} height={20} className='absolute pointer-events-none top-3 left-3' />}
        </div>
    )
}

export default BtnShare
