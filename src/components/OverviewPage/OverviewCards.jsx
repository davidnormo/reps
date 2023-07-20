import { useMemo } from "preact/hooks";
import useData, { getCategory, getExercise } from "../../hooks/useData";
import Card from "../Card/Card";
import { randomInt } from "../../utils/utils";

export default function OverviewCards() {
  const data = useData();

  if (!data.exercises.length) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { mostReps, notDone, random } = useMemo(() => {
    const init = data.exercises.reduce((acc, ex) => {
      acc[ex.id] = [];
      return acc;
    }, {});
    const repsByExercise = data.reps.reduce((acc, rep) => {
      if (!acc[rep.exerciseId]) acc[rep.exerciseId] = [];
      acc[rep.exerciseId].push(rep);
      return acc;
    }, init);

    let mostReps = 0;
    let ex = null;
    let notDone = null;

    const keys = Object.keys(repsByExercise);
    for (let i = 0; i < keys.length; i++) {
      if (repsByExercise[keys[i]].length > mostReps) {
        mostReps = repsByExercise[keys[i]].length;
        ex = getExercise(data, keys[i]);
      }

      if (repsByExercise[keys[i]].length === 0) {
        notDone = getExercise(data, keys[i]);
      }
    }

    const randEx = data.exercises[randomInt(data.exercises.length)];

    return {
      mostReps: {
        value: mostReps,
        exercise: ex,
      },
      notDone,
      random: {
        exerciseName: randEx.name,
        category: getCategory(data, randEx.category),
      },
    };
  }, []);

  return (
    <div className="mt-2 grid gap-x-10 gap-y-4 px-10 grid-cols-2">
      <Card tight>
        <h6 className="mb-2 text-xs text-gray-400">Most reps</h6>
        <h5 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          {mostReps.value}x
        </h5>
        <h6 className="mb-2 text-md tracking-tight font-bold text-gray-500">
          {mostReps.exercise.name}
        </h6>
      </Card>
      {notDone && (
        <Card tight>
          <h6 className="mb-2 text-xs text-gray-400">Don't forget...</h6>
          <h6 className="mb-2 text-4xl tracking-tight font-bold text-gray-900">
            {notDone.name}
          </h6>
        </Card>
      )}
      <Card tight className="col-span-2 justify-self-center">
        <h6 className="mb-2 text-xs text-gray-400">Random Exercise</h6>
        <h6 className="mb-2 text-4xl tracking-tight font-bold text-gray-900">
          {random.exerciseName}
        </h6>
        <h6 className="mb-2 text-md tracking-tight font-bold text-gray-500">
          {random.category.name}
        </h6>
      </Card>
    </div>
  );
}
