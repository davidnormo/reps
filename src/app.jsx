import "./app.css";
import { Nav } from "./components/Nav/Nav";
import { NavCtx, useNavSetup } from "./hooks/useNav";
import logo from "/android-chrome-512x512.png";

export function App() {
  const { PageComponent, ...navValue } = useNavSetup();

  return (
    <NavCtx.Provider value={navValue}>
      <div className="w-full h-screen flex flex-col overflow-hidden">
        <div className="flex flex-row justify-start items-center px-3 py-3">
          <img src={logo} className="shrink max-h-[32px] max-w-[32px]" />
          <h1 className="text-xl font-bold ml-2">Reps</h1>
        </div>
        <div
          className="overflow-scroll pb-4"
          style={{ height: "calc(100vh - 36px - 51px)" }}
        >
          <PageComponent />
        </div>
        <Nav />
      </div>
    </NavCtx.Provider>
  );
}
