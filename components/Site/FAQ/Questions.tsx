'use client'
import Accordion from '@/components/Site/Accordion/Accordion'
import React, { useEffect } from 'react'

type Props = {
    questions: { title: string, content: string }[]
}

const Questions = (props: Props) => {
    const [selected, setSelected] = React.useState<number | null>(0)
    const [isMounted, setIsMounted] = React.useState(false)
    const [questions, setQuestions] = React.useState(props.questions)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        isMounted && <div className='flex flex-col gap-4'>
            {
                questions.map((item, index) => (
                    <button key={index} onClick={() => setSelected(index)}>
                        <div>
                            <Accordion title={item.title} content={item.content} isSelected={selected === index} />
                        </div>
                    </button>
                ))
            }
        </div>
    )
}

export default Questions