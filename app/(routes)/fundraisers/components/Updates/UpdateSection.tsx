import React from 'react'
import Update from './Update'

type Props = {}

const UpdateSection = (props: Props) => {
    return (
        <div>
            <div className="text-[32px] my-2 font-semibold">Updates</div>
            <div>
                <Update />
            </div>
        </div>
    )
}

export default UpdateSection