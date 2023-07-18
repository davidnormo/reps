import { useState, useEffect } from "preact/hooks";

const getCurrentHistoryState = () => ({
  page: window.location.hash.slice(1),
});

export default function useNav() {
  const [historyState, setHistoryState] = useState(getCurrentHistoryState());

  useEffect(() => {
    window.addEventListener("popstate", (e) => {
      setHistoryState(e.state || getCurrentHistoryState());
    });
  }, []);

  return historyState;
}
