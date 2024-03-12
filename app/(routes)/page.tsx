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
        <div className="phone:mx-0 tablet:mx-10 laptop:mx-40">
          <GiveMonthly />
        </div>
        <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 mb-32">
          <Missions />
        </div>
        <div className="mb-32">
          <RecentDonations />
        </div>
        <div className="phone:mx-0 tablet:mx-10 laptop:mx-40">
          <SupportFundraisersSection />
        </div>
        <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 mb-24">
          <TrustedNGOs />
        </div>
        <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 mb-24">
          <RaiseFundsSection />
        </div>
        <div className="mb-24">
          <MostTrustedPlatform />
        </div>
        <div className="bg-[#FAF9F9] pb-10">
          <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 mb-24">
            <GiveInTheNewsSection />
          </div>
        </div>
        <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 my-32">
          <CommentsSection />
        </div>
        <div className="bg-[#FAF9F9] pb-10">
          <div className="phone:mx-0 tablet:mx-10 laptop:mx-40 mb-24">
            <BlogSection/>
          </div>
        </div>
      </div>
    </div>
  );
}
