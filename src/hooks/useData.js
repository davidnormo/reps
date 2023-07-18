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
    const id = window.crypto.randomUUID();
    data.exercises.push({ id, ...exercise });
    updateStorage(data);
    dataChanged((x) => ++x);
  };

  const updateExercise = (exercise) => {
    const idx = data.exercises.findIndex((ex) => ex.id === exercise.id);
    data.exercises[idx] = exercise;
    updateStorage(data);
    dataChanged((x) => ++x);
  };

  const deleteExercise = (exercise) => {
    const idx = data.exercises.findIndex((ex) => ex.id === exercise.id);
    data.exercises.splice(idx, 1);
    updateStorage(data);
    dataChanged((x) => ++x);
  };

  return {
    data,
    addExercise,
    updateExercise,
    deleteExercise,
  };
};

export default function useData() {
  return useContext(DataCtx);
}
