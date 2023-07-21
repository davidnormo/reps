import { useState, useEffect, useContext } from "preact/hooks";
import OverviewPage from "../components/OverviewPage/OverviewPage";
import RecordPage from "../components/RecordPage/RecordPage";
import ManagePage from "../components/ManagePage/ManagePage";
import { createContext } from "preact";

const getCurrentHistoryState = () => {
  const page = window.location.hash.slice(1) || "overview";
  return {
    page,
  };
};

let listening = false;

const routeToComponent = {
  overview: OverviewPage,
  record: RecordPage,
  manage: ManagePage,
};

export const NavCtx = createContext({});

export const useNavSetup = () => {
  const [historyState, setHistoryState] = useState(getCurrentHistoryState());

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
    setHistoryState: (newState) => {
      setHistoryState({
        page,
        ...newState,
      });
    },
    PageComponent,
  };
};

export default function useNav() {
  return useContext(NavCtx);
}
