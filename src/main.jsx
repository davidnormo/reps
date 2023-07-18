import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import { DataCtx, getDataFromStorage } from "./hooks/useData.js";

render(
  <DataCtx.Provider value={getDataFromStorage()}>
    <App />
  </DataCtx.Provider>,
  document.getElementById("app"),
);
