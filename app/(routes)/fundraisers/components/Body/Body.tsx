'use client'
import React, { useEffect, useRef } from 'react';
import Story from '../Story/Story';
import UpdateSection from '../Updates/UpdateSection';
import SupportSection from '../SupportTheFundRaiser/SupportSection';
import DonateSection from '../DonateSection/Section';
import OrganiserSection from '../DonateSection/components/Organisers/OrganiserSection';
import SupportingFundraiserSection from '../Start a Supporting Fundraiser/Section';

const Body = () => {

    return (
        <div className="flex justify-between gap-4 w-full h-full">
            <div className="left-column w-[60%]">
                <div className="border p-2 border-dashed border-slate-400 rounded-md text-center mt-4 h-52 flex items-center justify-between">
                    Image / Video
                </div>
                <div>
                    <Story />
                </div>

                <div>
                    <UpdateSection />
                </div>

                <div>
                    <SupportSection />
                </div>
                <div className='mt-10'>
                    <OrganiserSection />
                </div>
                <div className='mt-10'>
                    <SupportingFundraiserSection />
                </div>
            </div>
            <div className="right-column w-[35%]">
                <DonateSection />
            </div>
        </div>
    );
};

export default Body;
