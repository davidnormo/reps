import { useState, useEffect, useContext } from "preact/hooks";
import OverviewPage from "../components/OverviewPage/OverviewPage";
import RecordPage from "../components/RecordPage/RecordPage";
import ManagePage from "../components/ManagePage/ManagePage";
import { FunctionComponent, PreactContext, createContext } from "preact";
import ExerciseDetailsPage from "../components/ExerciseDetailsPage/ExerciseDetailsPage";

export type Page = "overview" | "record" | "manage" | "exerciseDetails";
const isPage = (p: string): p is Page =>
  ["overview", "record", "manage", "exerciseDetails"].includes(p);

type HistoryState<T> = T & {
  page: Page;
};

function getCurrentHistoryState<T>(): HistoryState<T> {
  const page = window.location.hash.slice(1) || "overview";

  if (!isPage(page)) {
    throw new Error(`Invalid page: ${page}`);
  }

  return {
    page,
    ...history.state,
  } as HistoryState<T>;
}

let listening = false;

const routeToComponent: Record<Page, FunctionComponent> = {
  overview: OverviewPage,
  record: RecordPage,
  manage: ManagePage,
  exerciseDetails: ExerciseDetailsPage,
};

export const NavCtx = createContext<Nav<Record<string, any>>>({
  page: "overview",
  setHistoryState: () => {},
});

type Nav<T> = HistoryState<T> & {
  setHistoryState: (newState: Record<string, any>) => void;
};

export const useNavSetup = () => {
  const [historyState, setHistoryState] = useState<HistoryState<{}>>(
    getCurrentHistoryState(),
  );

  useEffect(() => {
    if (!listening) {
      listening = true;
      window.addEventListener("popstate", (e) => {
        setHistoryState(e.state || getCurrentHistoryState());
      });
    }
  }, []);

  const { page } = historyState;

  let PageComponent = routeToComponent[page];
  if (!PageComponent) {
    throw new Error(`Unsupported page: ${page}`);
  }

  return {
    ...historyState,
    setHistoryState<T>(newState: T) {
      const state = {
        page,
        ...newState,
      } as Nav<T>;
      setHistoryState(state as HistoryState<T>);
    },
    PageComponent,
  };
};

export default function useNav<T>(): Nav<T> {
  return useContext<Nav<T>>(NavCtx as PreactContext<Nav<T>>);
}
