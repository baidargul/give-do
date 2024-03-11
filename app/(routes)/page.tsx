import { HomepageCoursel } from "@/components/Site/Carousel/Homepage/HomepageCoursel";
import HomepageNav from "./components/Header/HomepageNav";
import GiveMonthly from "./components/GiveMonthly";
import Missions from "./components/Missions";
import RecentDonations from "./components/RecentDonations";
import SupportFundraisersSection from "./components/SupportFundraisersSection";

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
      </div>
    </div>
  );
}
