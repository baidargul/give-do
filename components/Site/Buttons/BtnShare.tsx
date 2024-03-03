'use client'
import React, { useEffect, useRef } from 'react'
import './button.css'

type Props = {}

const BtnShare = (props: Props) => {
    const buttonRef: any = useRef();

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

    return (
        <div ref={buttonRef}>
            <button id='button' className='text-sm text-site-button-share-text min-w-[150px] w-full h-[44px] hover:text-site-button-share-text_hover font-semibold bg-white rounded-md  border border-site-button-share-border drop-shadow-sm'>
                Share
            </button>
        </div>
    )
}

export default BtnShare
