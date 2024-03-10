import { HomepageCoursel } from "@/components/Site/Carousel/Homepage/HomepageCoursel";
import HomepageNav from "./components/Header/HomepageNav";

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
        </div>
      </div>
    </div>
  );
}
