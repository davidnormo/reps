import { PlusButton } from "../Icons/Icons";
import AddExercise from "./AddUpdateExercise";
import useData from "../../hooks/useData";
import useNav from "../../hooks/useNav";
import ExerciseRow from "./ExerciseRow";
import Card from "../Card/Card";

export default function ManagePage() {
  const data = useData();
  const { addUpdate = false, setHistoryState } = useNav();

  return (
    <div className="w-full mt-1 flex flex-col h-full">
      {!addUpdate && (
        <>
          <div className="flex justify-between content-center w-full px-2">
            <h2 className="text-2xl">Manage Exercises</h2>
            <PlusButton
              className="cursor-pointer"
              onClick={() => setHistoryState({ addUpdate: true })}
            />
          </div>
          {data.categories.length ? (
            <div className="mx-2">
              {data.categoriesHierarchy.map((cat) => (
                <Card key={cat.id} tight className="mt-2 pb-0">
                  <div
                    className={`${cat.bgColor} border-t border-white/75 -mt-3 -mx-3 rounded-t-lg font-bold p-2`}
                  >
                    {cat.name}
                  </div>
                  {cat.exercises.map((exercise) => (
                    <ExerciseRow
                      key={exercise.id}
                      exercise={exercise}
                      deleteExercise={(ex) => data.deleteExercise(ex)}
                    />
                  ))}
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center grow flex justify-center content-center items-center">
              No exercises yet :(
            </div>
          )}
        </>
      )}
      {addUpdate && (
        <AddExercise
          exercise={typeof addUpdate === "object" && addUpdate}
          close={() => setHistoryState({ addUpdate: false })}
        />
      )}
    </div>
  );
}
