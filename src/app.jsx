import './app.css'
import { Nav } from './components/nav/nav'
import useNav from './hooks/useNav';

export function App() {
  const { page } = useNav();

  return (
    <div className="h-full">
      <h1 className="text-3xl font-bold mt-1 ml-1">
        Reps
      </h1>

      <h2>{page}</h2>
      
      <Nav />
    </div>
  )
}
