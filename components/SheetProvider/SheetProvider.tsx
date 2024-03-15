import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

type Props = {
    children: React.ReactNode
    content: React.ReactNode
}

const SheetProvider = (props: Props) => {
    return (
        <Sheet>
            <SheetTrigger>{props.children}</SheetTrigger>
            <SheetContent className='p-0'>
                {props.content}
            </SheetContent>
        </Sheet>

    )
}

export default SheetProvider