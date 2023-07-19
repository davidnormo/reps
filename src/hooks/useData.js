import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";

const schema = {
  exercises: [],
  reps: [],
  state: {},
};

const getDataFromStorage = () => {
  const rawData = window.localStorage.getItem("data");
  let data = schema;
  if (rawData) {
    data = JSON.parse(rawData);
    for (let p of Object.keys(schema)) {
      if (!data[p]) {
        data[p] = schema[p];
      }
    }
    updateStorage(data);
  }

  return data;
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

  const addRep = (exercise, details) => {
    data.reps.push({
      exerciseId: exercise.id,
      details,
    });
    updateStorage(data);
    dataChanged((x) => ++x);
  };

  const updateState = (key, value) => {
    data.state[key] = value;
    updateStorage(data);
    dataChanged((x) => ++x);
  };

  return {
    data,
    addExercise,
    updateExercise,
    deleteExercise,
    addRep,
    updateState,
  };
};

export default function useData() {
  return useContext(DataCtx);
}
