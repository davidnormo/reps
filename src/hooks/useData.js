import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";

const getDataFromStorage = () => {
  return JSON.parse(
    window.localStorage.getItem("data") || '{ "exercises": [] }',
  );
};

const updateStorage = (data) => {
  window.localStorage.setItem("data", JSON.stringify(data));
};

const data = getDataFromStorage();

export const DataCtx = createContext({ data });

export const useSetupData = () => {
  const [, dataChanged] = useState(0);

  const addExercise = (exercise) => {
    data.exercises.push(exercise);
    updateStorage(data);
    dataChanged((x) => ++x);
  };

  return {
    data,
    addExercise,
  };
};

export default function useData() {
  return useContext(DataCtx);
}
