import useData from "../../hooks/useData";
import StackedBarChart from "../StackedBarChart/StackedBarChart";

export default function WeekOverview() {
  const { data } = useData();
  return (
    <div className="h-[200px] mt-2">
      <StackedBarChart
        height={200}
        series={[
          [{ value: 10 }, { value: 10 }, { value: 10 }],
          [{ value: 10 }],
          [{ value: 10 }, { value: 10 }],
          [{ value: 10 }],
          [{ value: 10 }, { value: 5 }],
          [],
          [],
        ]}
        legend={{ x: ["M", "T", "W", "Th", "F", "S", "S"] }}
      />
    </div>
  );
}
