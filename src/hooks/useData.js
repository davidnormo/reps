import { createContext } from "preact";
import { useContext } from "preact/hooks";

export const getDataFromStorage = () => {
  return JSON.parse(window.localStorage.getItem("data") || "{}");
};

const data = getDataFromStorage();

export const DataCtx = createContext(data);

export function useData() {
  const data = useContext(DataCtx);

  return {
    data,
  };
}
