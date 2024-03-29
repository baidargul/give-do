import Story from '../Story/Story';
import UpdateSection from '../Updates/UpdateSection';
import SupportSection from '../SupportTheFundRaiser/SupportSection';
import DonateSection from '../DonateSection/Section';
import OrganiserSection from '../DonateSection/components/Organisers/OrganiserSection';
import SupportingFundraiserSection from '../Start a Supporting Fundraiser/Section';
import DonorsSection from '../DonateSection/components/Donors/DonorsSection';
import DonateViaSection from '../DonateVia/DonateViaSection';

const Body = () => {

    return (
        <div className="flex justify-between gap-8 w-full h-full relative">
            <div className="left-column w-full tablet:w-[68%]">
                <div className="hidden tablet:flex border p-2 border-dashed border-slate-400 rounded-md text-center mt-4 h-52 items-center justify-between">
                    Image / Video
                </div>
                <div className='hidden tablet:block'>
                    <DonateViaSection />
                </div>
                <div className='hidden tablet:block'>
                    <Story />
                </div>
                <div className='block tablet:hidden'>
                    <DonateSection />
                </div>
                <div className=''>
                    <UpdateSection />
                </div>
                <div className='block px-4 mb-10 tablet:hidden'>
                    <DonorsSection />
                </div>

                <div className='px-4 tablet:px-0'>
                    <SupportSection />
                </div>
                <div className='mt-10 px-4 tablet:px-0'>
                    <OrganiserSection />
                </div>
                <div className='mt-10 px-4 tablet:px-0'>
                    <SupportingFundraiserSection />
                </div>
            </div>
            <div className="right-column w-[35%] hidden tablet:block">
                <DonateSection />
            </div>
        </div>
    );
};

export default Body;
