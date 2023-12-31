import WeekOverview from "../WeekOverview/WeekOverview";
import OverviewCards from "./OverviewCards";
import Welcome from "./Welcome";

export default function OverviewPage() {
  return (
    <div className="w-full mt-1 p-2 flex flex-col grow min-h-[50vh]">
      <Welcome />
      <WeekOverview />
      <OverviewCards />
    </div>
  );
}
