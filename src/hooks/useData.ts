import mockData from "./mockData";
import { randomInt } from "../utils/utils";
import { DeepSignal, deepSignal } from "deepsignal";

const schema = (): SerialisableData => ({
  exercises: [],
  categories: [],
  reps: [],
  state: {},
});

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

interface SerialisableData {
  categories: Category[],
  exercises: Exercise[],
  reps: Rep[],
  state: Record<string, any>
}

const getDataFromStorage = (): SerialisableData => {
  const rawData = window.localStorage.getItem("data") as string | undefined;
  const schemaRaw = schema();
  let data: SerialisableData | any = schemaRaw;
  if (rawData) {
    data = JSON.parse(rawData) as Record<string, any>;
    for (let p of Object.keys(schemaRaw)) {
      if (!data[p]) {
        // @ts-ignore
        data[p] = schemaRaw[p];
      }
    }
    updateStorage(data);
  }

  if (import.meta.env.DEV) {
    data = mockData({ categoryBgColors, randomInt });
  }

  return data as SerialisableData;
};

const updateStorage = (data: SerialisableData) => {
  window.localStorage.setItem("data", JSON.stringify(data));
};

export interface Category {
  id: string;
  name: string;
  bgColor: string;
}

export interface Exercise {
  id: string;
  name: string;
  category: string;
  unit: string;
  timed: boolean;
  sets: boolean;
}

export interface RepDetails {
  startTime: number;
  ellapsedTime?: number;
  set?: number;
  unitValue?: string;
}

export interface Rep {
  exerciseId: string;
  details: RepDetails;
}

export interface Data extends SerialisableData {
  categoriesHierarchy: Array<Category & {
    exercises: Exercise[];
  }>

  addExercise(exercise: Omit<Exercise, 'id'>): void;
  updateExercise(exercise: Exercise): void;
  deleteExercise(exercise: Exercise): void;
  addRep(exercise: Exercise, details: RepDetails): void;
  endSet(exercise: Exercise, set: number): void;
  updateState(key: string, value: any): void;
  clearData(): void;
}

const data: DeepSignal<Data> = deepSignal({
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

  addExercise(exercise: Omit<Exercise, 'id'>) {
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

  updateExercise(exercise: Exercise) {
    const idx = data.exercises.findIndex((ex) => ex.id === exercise.id);
    data.exercises[idx] = exercise;
    updateStorage(data);
  },

  deleteExercise(exercise: Exercise) {
    const idx = data.exercises.findIndex((ex) => ex.id === exercise.id);
    data.exercises.splice(idx, 1);
    updateStorage(data);
  },

  addRep(exercise: Exercise, details: RepDetails) {
    data.reps.push({
      exerciseId: exercise.id,
      details,
    });
    updateStorage(data);
  },

  endSet(exercise: Exercise, set: number) {
    data.reps.forEach(rep => {
      if (rep.exerciseId === exercise.id && rep.details.set === undefined) {
        rep.details.set = set;
      }
    });
    updateStorage(data);
  },

  updateState(key: string, value: any) {
    data.state[key] = value;
    updateStorage(data);
  },

  clearData() {
    const schemaRaw = schema();
    let p: keyof SerialisableData;
    for (p in schemaRaw) {
      delete data[p];
      // @ts-ignore
      data[p] = schemaRaw[p];
    }
    updateStorage(data);
  },
});

export const getCategory = (data: DeepSignal<Data>, catId: string) => {
  return data.categories.find((cat) => cat.id === catId);
};

export const getExercise = (data: DeepSignal<Data>, exId: string) => {
  return data.exercises.find((ex) => ex.id === exId);
};

export default function useData() {
  return data;
}
