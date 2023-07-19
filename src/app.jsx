import "./app.css";
import { Nav } from "./components/nav/nav";
import { DataCtx, useSetupData } from "./hooks/useData";
import { NavCtx, useNavSetup } from "./hooks/useNav";
import logo from "/android-chrome-512x512.png";

export function App() {
  const { PageComponent, ...navValue } = useNavSetup();

  const dataValue = useSetupData();

  return (
    <NavCtx.Provider value={navValue}>
      <DataCtx.Provider value={dataValue}>
        <div className="w-full h-screen flex flex-col overflow-hidden">
          <div className="flex flex-row justify-start items-center px-3 py-3">
            <img src={logo} className="shrink max-h-[32px] max-w-[32px]" />
            <h1 className="text-xl font-bold ml-2">Reps</h1>
          </div>
          <div
            className="overflow-scroll"
            style={{ height: "calc(100vh - 36px - 51px)" }}
          >
            <PageComponent />
          </div>
          <Nav />
        </div>
      </DataCtx.Provider>
    </NavCtx.Provider>
  );
}
