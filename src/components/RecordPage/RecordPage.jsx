import useData from "../../hooks/useData";
import useNav from "../../hooks/useNav";
import Autocomplete from "../Autocomplete/Autocomplete";
import RecordExercise from "./RecordExercise";

export default function RecordPage() {
  const { exercise, setHistoryState } = useNav();
  const { data } = useData();
  const findExercises = (query) => {
    return data.exercises
      .filter((ex) => {
        const qRE = new RegExp(query, "i");
        return qRE.test(ex.name) || qRE.test(ex.category);
      })
      .map((ex) => ({ ...ex, label: ex.name }));
  };

  return (
    <div className="w-full mt-1 flex flex-col grow min-h-[50vh]">
      <div className="sticky top-0 flex justify-between content-center w-full px-2">
        <h2 className="text-2xl">Record Exercise</h2>
      </div>
      <div
        className={`mx-4 grow flex justify-center  ${
          exercise ? "" : "items-center"
        }`}
      >
        {!exercise ? (
          <Autocomplete
            placeholder="Search Exercises..."
            getResults={findExercises}
            onCommit={(result) => setHistoryState({ exercise: result })}
          />
        ) : (
          <RecordExercise />
        )}
      </div>
    </div>
  );
}
