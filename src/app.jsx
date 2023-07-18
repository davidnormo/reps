import "./app.css";
import { Nav } from "./components/nav/nav";
import useNav from "./hooks/useNav";

export function App() {
  const { PageComponent } = useNav();

  return (
    <div className="h-full w-full">
      <h1 className="text-3xl font-bold mt-1 ml-1">Reps</h1>

      <PageComponent />

      <Nav />
    </div>
  );
}
