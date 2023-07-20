import mockData from "./mockData";
import { randomInt } from "../utils/utils";
import { deepSignal } from "deepsignal";

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

const data = deepSignal({
  ...getDataFromStorage(),

  /**
   * Used by ManagePage for rendering the list of categories with their exercises
   */
  get categoriesHierarchy() {
    return data.categories.map((cat) => {
      return {
        ...cat,
        exercises: data.exercises.filter((ex) => ex.category === cat.id),
      };
    });
  },

  addExercise(exercise) {
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
  },

  updateExercise(exercise) {
    const idx = data.exercises.findIndex((ex) => ex.id === exercise.id);
    data.exercises[idx] = exercise;
    updateStorage(data);
  },

  deleteExercise(exercise) {
    const idx = data.exercises.findIndex((ex) => ex.id === exercise.id);
    data.exercises.splice(idx, 1);
    updateStorage(data);
  },

  addRep(exercise, details) {
    data.reps.push({
      exerciseId: exercise.id,
      details,
    });
    updateStorage(data);
  },

  updateState(key, value) {
    data.state[key] = value;
    updateStorage(data);
  },
});

export const getCategory = (data, catId) => {
  return data.categories.find((cat) => cat.id === catId);
};

export const getExercise = (data, exId) => {
  return data.exercises.find((ex) => ex.id === exId);
};

export default function useData() {
  return data;
}
