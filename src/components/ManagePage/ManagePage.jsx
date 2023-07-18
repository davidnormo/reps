import { useState } from "preact/hooks";
import { PlusButton } from "../Icons/Icons";
import AddExercise from "./AddExercise";
import useData from "../../hooks/useData";

export default function ManagePage() {
  const { data } = useData();
  const [addExercise, setAddExercise] = useState(false);

  return (
    <div className="w-full mt-1">
      {!addExercise && (
        <>
          <div className="flex justify-between content-center w-full px-2">
            <h2 className="text-2xl">Manage Exercises</h2>
            <PlusButton
              className="cursor-pointer"
              onClick={() => setAddExercise(true)}
            />
          </div>
          {data.exercises.map(({ name }) => (
            <div key={name}>{name}</div>
          ))}
        </>
      )}
      {addExercise && <AddExercise close={() => setAddExercise(false)} />}
    </div>
  );
}
