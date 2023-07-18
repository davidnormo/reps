import { useState, useEffect } from "preact/hooks";
import OverviewPage from "../components/OverviewPAge/OverviewPage";
import RecordPage from "../components/RecordPage/RecordPage";
import ManagePage from "../components/ManagePage/ManagePage";

const getCurrentHistoryState = () => {
  const page = window.location.hash.slice(1);
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

export default function useNav() {
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
    PageComponent,
  };
}
