import React from 'react'

type Props = {
    type: "TAX BENEFITS AVAILABLE" | "RECENT DONOR" | "FIRST DONOR" | "TOP DONOR"
}

const Tag = (props: Props) => {
    const { type } = props

    switch (type) {
        case "TAX BENEFITS AVAILABLE":
            return (
                <div className='text-site-text-tag_tax_benefits_available h-[28px] flex justify-center items-center bg-site-bg-tag_tax_benefits_available px-[10px] py-[2px] text-center text-[0.75rem] uppercase truncate w-fit font-semibold rounded-full'>
                    TAX BENEFITS AVAILABLE
                </div>
            )
        case "RECENT DONOR":
            return (
                <div className='text-site-text-tag_recent_donor h-[28px] flex justify-center items-center bg-site-bg-tag_recent_donor px-[10px] py-[2px] text-center text-[0.75rem] uppercase truncate w-fit font-semibold rounded-full'>
                    RECENT DONOR
                </div>
            )

            case "FIRST DONOR":
                return (
                    <div className='text-site-text-tag_first_donor h-[28px] flex justify-center items-center bg-site-bg-tag_first_donor px-[10px] py-[2px] text-center text-[0.75rem] uppercase truncate w-fit font-semibold rounded-full'>
                        FIRST DONOR
                    </div>
                )
                case "TOP DONOR":
                    return (
                        <div className='text-site-text-tag_top_donor h-[28px] flex justify-center items-center bg-site-bg-tag_top_donor px-[10px] py-[2px] text-center text-[0.75rem] uppercase truncate w-fit font-semibold rounded-full'>
                            TOP DONOR
                        </div>
                    )
        default:
            break;
    }

    return (
        <div className='text-site-text-tax_benefits_available h-[28px] flex justify-center items-center bg-site-bg-tax_benefits_available px-[10px] py-[2px] text-center text-[0.75rem] uppercase truncate w-fit font-semibold rounded-full'>
            TAX BENEFITS AVAILABLE
        </div>
    )
}

export default Tag