import { useMemo } from "preact/hooks";
import useData, { getCategory, getExercise } from "../../hooks/useData";
import StackedBarChart from "../StackedBarChart/StackedBarChart";

export default function WeekOverview() {
  const { data } = useData();

  const series = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Anchor to beginning of day
    let day = today.getDay() - 1; // now -1 is Sunday
    if (day === -1) day = 6; // Handle Sunday being at the end of the week

    let weekBegin = new Date();
    weekBegin.setDate(today.getDate() - day);
    weekBegin.setHours(0, 0, 0, 0);

    const series = [[], [], [], [], [], [], []];

    for (let i = 0; i < data.reps.length; i++) {
      const {
        details: { startTime, ellapsedTime },
        exerciseId,
      } = data.reps[i];
      const startDate = new Date(startTime);

      if (startDate < weekBegin) continue;

      let day = startDate.getDay() - 1;
      if (day === -1) day = 6;

      const exercise = getExercise(data, exerciseId);
      const category = getCategory(data, exercise.category);
      let stack = series[day].find((stack) => stack.catId === category.id);

      if (!stack) {
        stack = { catId: category.id, color: category.bgColor, value: 0 };
        series[day].push(stack);
      }

      stack.value += ellapsedTime;
    }

    return series;
  }, []);

  return (
    <div className="h-[200px] mt-2 mb-2">
      <StackedBarChart
        noDataMessage="No reps yet..."
        height={200}
        series={series}
        legend={{ x: ["M", "T", "W", "Th", "F", "S", "S"] }}
      />
    </div>
  );
}
