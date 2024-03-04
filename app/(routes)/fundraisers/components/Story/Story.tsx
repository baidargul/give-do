'use client'
import React, { useEffect } from 'react'

type Props = {}

const Story = (props: Props) => {
    const [showMore, setShowMore] = React.useState(false)
    const [isMounted, setIsMounted] = React.useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const handleReadMore = () => {
        setShowMore(!showMore)
    }

    return (
        isMounted && <div className='mb-5 target:mb-0'>
            <div className="text-xl my-4 mt-5 tablet:text-[32px] tablet:my-5 tablet:mt-8 font-semibold">Story</div>
            <div className='relative'>
                <p className={`${showMore === false && "line-clamp-[14]"} transition-all duration-500 overflow-hidden tablet:overflow-visible tablet:line-clamp-none`}>“I saw a girl, barely 7 or 8, being pushed into flesh trade. Her cries for help still echo in my ears. There were men as old as 60 r*ping the innocent child. That was the day I knew my mission in life was to get these children out of the hell-like conditions in red-light areas. They are nothing short of hell and no child deserves to grow up in this environment” says Vinay Vasta, founder of Social Activities Integration, an organisation committed to freeing children trapped in red-light areas.

                    Vinay and his NGO have been able to provide education, medical care and nutrition to over 2,500 children. But his dream to provide safe shelter to children remains unrealized. “We do our best to keep these children safe during the day but sadly they are forced to go back to the red light areas at night as we don’t have a home for them. Your donation can help us build a safe home for children of sex workers and prevent them from being pulled into prostitution. Donate to make this dream a reality

                    Donate easily through UPI, all debit/credit cards and net banking.

                    Charitable donations to this fundraising campaign are tax exempted under 80G of the Income Tax Act (India).

                    Life in red light areas

                    “S*x workers use their homes which are barely 6 feet by 4 feet for their business. They invite customers in the presence of their children. Their children not only witness abuse but experience it too. Just imagine a child being told that all she can ever become in life is a pr*stitute”, Vinay shares as he explains the extent of abuse children face in red light areas.

                    This is a life that thousands of children are forced to live behind closed doors where they suffer abuse and exploitation morning, noon and night.

                    A ray of hope

                    Vinay has been relentlessly trying to give children the care and education they deserve. He has provided quality English education to thousands of children, enabling them to secure a livelihood out of red-light areas. Several children taught by Vinay are today leading successful lives as professionals and Government employees.

                    However the sad reality is that Vinay and his NGO, in the absence of a permanent shelter home, are unable to provide round the clock safety to these children, which is essential for their well-being.

                    Your donations can enable SAI to build a shelter home for the children of sex workers and usher in a new tomorrow for them, away from the horrors of red-light areas.

                    Donate to this fundraiser on Give.do, India’s largest and most trusted online donation platform, to provide safe shelter for children of sex workers and save them from abuse and second generation pr*stitution.
                </p>
                <button onClick={handleReadMore} className={`text-site-bg-redHighlight z-10 -bottom-5 absolute tablet:hidden font-medium ${showMore && "-bottom-6"}`}>{showMore ? "Show Less" : "Read More"}</button>
                <div className={`h-44 w-full bg-gradient-to-t from-white to-transparent absolute bottom-0 ${showMore && "hidden"} tablet:hidden`}></div>
            </div>
        </div>
    )
}

export default Story