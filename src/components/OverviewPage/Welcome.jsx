import Card from "../Card/Card";

export default function Welcome() {
  return (
    <Card onClose={true}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Welcome to Reps
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Track your repeated exercises. Whether that's a workout, music practice,
        gaming, reading or something else - it's up to you.
      </p>
    </Card>
  );
}
