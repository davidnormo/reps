import { useState } from "preact/hooks";
import { PlusButton } from "../Icons/Icons";
import AddExercise from "./AddExercise";
import useData from "../../hooks/useData";

export default function ManagePage() {
  const { data } = useData();
  const [addExercise, setAddExercise] = useState(false);

  return (
    <div className="w-full mt-1 flex flex-col h-full">
      {!addExercise && (
        <>
          <div className="flex justify-between content-center w-full px-2">
            <h2 className="text-2xl">Manage Exercises</h2>
            <PlusButton
              className="cursor-pointer"
              onClick={() => setAddExercise(true)}
            />
          </div>
          {data.exercises.length ? (
            <div className="mx-4">
              {data.exercises.map(({ name }) => (
                <div
                  key={name}
                  className="p-4 border-solid border-b flex justify-between items-center"
                >
                  {name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width="15"
                    height="15"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center grow flex justify-center content-center items-center">
              No exercises yet :(
            </div>
          )}
        </>
      )}
      {addExercise && <AddExercise close={() => setAddExercise(false)} />}
    </div>
  );
}
