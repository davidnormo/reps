import "./app.css";
import { Nav } from "./components/nav/nav";
import { DataCtx, useSetupData } from "./hooks/useData";
import { NavCtx, useNavSetup } from "./hooks/useNav";

export function App() {
  const { PageComponent, ...navValue } = useNavSetup();

  const dataValue = useSetupData();

  return (
    <NavCtx.Provider value={navValue}>
      <DataCtx.Provider value={dataValue}>
        <div className="h-full w-full">
          <h1 className="text-3xl font-bold mt-1 ml-1">Reps</h1>

          <PageComponent />

          <Nav />
        </div>
      </DataCtx.Provider>
    </NavCtx.Provider>
  );
}
