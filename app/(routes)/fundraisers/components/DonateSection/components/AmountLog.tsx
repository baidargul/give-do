import { Progress } from '@/components/ui/progress'
import React from 'react'

type Props = {}

const AmountLog = (props: Props) => {
    return (
        <div>
            <Progress value={34} />
            <div className='flex justify-between items-center mt-4'>
                <div className='w-[60%]'>
                    <div className='text-xs'>
                        <div className='text-lg tracking-wide'>
                            $18,496
                        </div>
                        <div className='flex gap-1 items-center'>
                            <span>Raised of</span>
                            <span>$60.3K goal</span>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] flex items-center gap-4'>
                    <div className='text-xs'>
                        <div className='text-lg tracking-wide'>
                            947
                        </div>
                        <div className='flex gap-1 items-center'>
                            <span>Supporters</span>
                        </div>
                    </div>
                    <div className='text-xs'>
                        <div className='text-lg tracking-wide'>
                            4
                        </div>
                        <div className='flex gap-1 items-center'>
                            <span>Days Left</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AmountLog