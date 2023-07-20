import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";
import mockData from "./mockData";

const schema = {
  exercises: [],
  categories: [],
  reps: [],
  state: {},
};

export const categoryBgColors = [
  "bg-slate-100",
  "bg-zinc-100",
  "bg-red-100",
  "bg-orange-100",
  "bg-amber-100",
  "bg-lime-100",
  "bg-green-100",
  "bg-cyan-100",
  "bg-blue-100",
  "bg-indigo-100",
  "bg-violet-100",
  "bg-pink-100",
  "bg-rose-100",
];
export const randomInt = (max) => Math.floor(Math.random() * max);

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

  if (import.meta.env.DEV) {
    data = mockData({ categoryBgColors, randomInt });
  }

  return data;
};

const updateStorage = (data) => {
  window.localStorage.setItem("data", JSON.stringify(data));
};

const data = getDataFromStorage();

export const DataCtx = createContext({ data });

export const getCategory = (data, catId) => {
  return data.categories.find((cat) => cat.id === catId);
};

export const getExercise = (data, exId) => {
  return data.exercises.find((ex) => ex.id === exId);
};

export const useSetupData = () => {
  const [, dataChanged] = useState(0);

  const addExercise = (exercise) => {
    let catId;
    const category = data.categories.find(
      (cat) => cat.name === exercise.category,
    );
    if (!category) {
      catId = window.crypto.randomUUID();
      data.categories.push({
        id: catId,
        name: exercise.category,
        bgColor: categoryBgColors[randomInt(categoryBgColors.length)],
      });
    } else {
      catId = category.id;
    }

    const id = window.crypto.randomUUID();
    data.exercises.push({ id, ...exercise, category: catId });
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
