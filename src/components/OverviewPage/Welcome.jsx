import useData from "../../hooks/useData";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Link from "../Link/Link";

export default function Welcome() {
  const data = useData();

  if (data.state.hideWelcome) {
    return null;
  }

  return (
    <Card onClose={() => data.updateState("hideWelcome", true)}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Welcome to Reps
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
        Track your repeated exercises: a workout, music practice, gaming,
        reading or something else.
      </p>
      {!data.exercises.length && (
        <>
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
            To start with, let's create your first exercise...
          </p>
          <Link href="manage" state={{ addUpdate: true }}>
            <Button onClick={() => {}}>Create exercise</Button>
          </Link>
        </>
      )}
    </Card>
  );
}
