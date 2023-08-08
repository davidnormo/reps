import { Exercise } from "../../hooks/useData";
import useNav from "../../hooks/useNav";

export default function ExerciseDetailsPage() {
  const { exercise } = useNav<{ exercise: Exercise }>();
  return (
    <div className="w-full mt-1 flex flex-col grow min-h-[50vh]">
      <div className="sticky top-0 flex justify-between content-center w-full px-2">
        <h2 className="text-2xl">{exercise.name} Details</h2>
      </div>
    </div>
  );
}
