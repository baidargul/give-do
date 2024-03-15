import React from 'react'
import "./style.css"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {
    children: string
    content: React.ReactNode
}

const AccordionProvider = (props: Props) => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={props.children} className='rounded-b-md'>
                <AccordionTrigger className='bg-white hover:no-underline menuTrigger'>{props.children}</AccordionTrigger>
                <AccordionContent className='bg-[#fff7ed] h-fit rounded-b-md px-2 pb-0'>
                    {props.content}
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}

export default AccordionProvider

