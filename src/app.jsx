import './app.css'
import { Nav } from './components/nav/nav'

export function App() {
  return (
    <div className="h-full">
      <h1 className="text-3xl font-bold mt-1 ml-1">
        Reps
      </h1>
      <Nav />
    </div>
  )
}
