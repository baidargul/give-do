import { HomepageCoursel } from "@/components/Site/Carousel/Homepage/HomepageCoursel";
import HomepageNav from "./components/Header/HomepageNav";
import GiveMonthly from "./components/Header/GiveMonthly";
import Missions from "./components/Missions";

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
          <GiveMonthly/>
        </div>
        <div>
          <Missions/>
        </div>
      </div>
    </div>
  );
}
