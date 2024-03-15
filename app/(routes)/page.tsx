import { HomepageCoursel } from "@/components/Site/Carousel/Homepage/HomepageCoursel";
import HomepageNav from "./components/Header/HomepageNav";
import GiveMonthly from "./components/GiveMonthly";
import Missions from "./components/Missions";
import RecentDonations from "./components/RecentDonations";
import SupportFundraisersSection from "./components/SupportFundraisersSection";
import TrustedNGOs from "./components/TrustedNGOs";
import RaiseFundsSection from "./components/RaiseFundsSection";
import MostTrustedPlatform from "./components/MostTrustedPlatform";
import GiveInTheNewsSection from "./components/GiveInTheNewsSection";
import CommentsSection from "./components/PeopleComments/CommentsSection";
import BlogSection from "./components/BlogSection";
import SignupAndStayInformed from "./components/SignupAndStayInformed";
import CorporatePartners from "./components/CorporatePartners/CorporatePartners";
import { SocialChange } from "./components/SocialChange";
import WhatDoesGiveDo from "./components/WhatDoesGiveDo";
import SearchFundraiserByCause from "./components/SearchFundraiserByCause";
import Footer from "./(routes)/components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <HomepageNav />
      </div>
      <div className="w-full">
        <HomepageCoursel />
      </div>
      <div>
        <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 px-4 tablet:px-0">
          <GiveMonthly />
        </div>
        <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 tablet:mb-32 px-4 tablet:px-0">
          <Missions />
        </div>
        <div className="tablet:mb-32 my-10">
          <RecentDonations />
        </div>
        <div className="phone:mx-0 tablet:mx-10 laptop:mx-40  px-4 tablet:px-0">
          <SupportFundraisersSection />
        </div>
        <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 mb-24 px-4 tablet:px-0 mt-5 tablet:mt-0">
          <TrustedNGOs />
        </div>
        <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 mb-24  px-4 tablet:px-0">
          <RaiseFundsSection />
        </div>
        <div className="mb-14 tablet:mb-24 px-4 tablet:px-0">
          <MostTrustedPlatform />
        </div>
        <div className="bg-[#FAF9F9] tablet:pb-10 px-4 tablet:px-0">
          <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 mb-24 ">
            <GiveInTheNewsSection />
          </div>
        </div>
        <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 my-32">
          <CommentsSection />
        </div>
        <div className="bg-[#FAF9F9] pt-20 relative">
          <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 mb-24 pb-32">
            <BlogSection />
          </div>
        </div>
        <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 mb-24 -mt-40">
          <SignupAndStayInformed />
        </div>
        <div className="mt-48 phone:mx-0 tablet:mx-10 laptop:mx-40">
          <CorporatePartners />
        </div>
        <div className="mt-48 phone:mx-0 tablet:mx-10 laptop:mx-40">
          <SocialChange />
        </div>
        <div className="bg-[#FAF9F9] pt-2 pb-10 mt-28">
          <div className="mt-20 phone:mx-0 tablet:mx-10 laptop:mx-40 mb-20">
            <WhatDoesGiveDo />
          </div>
          <div className="phone:mx-0 tablet:mx-10 laptop:mx-40">
            <SearchFundraiserByCause />
          </div>
        </div>
        <div className="-mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}
