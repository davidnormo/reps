import { useState } from "preact/hooks";
import TextInput from "../TextInput/TextInput";
import Toggle from "../Toggle/Toggle";
import Select from "../Select/Select";
import Button from "../Button/Button";
import useData from "../../hooks/useData";

const units = ["None", "kg", "cm", "metres", "count"];

export default function AddExercise({ close, exercise }) {
  const data = useData();

  const [name, setName] = useState(exercise.name || "");
  const [category, setCategory] = useState(exercise.category || "");
  const [unit, setUnit] = useState(exercise.unit || units[0]);
  const [timed, setTimed] = useState(exercise.timed || false);
  const [sets, setSets] = useState(exercise.sets || false);

  const onDone = () => {
    if (exercise) {
      data.updateExercise({
        ...exercise,
        name,
        category,
        unit,
        timed,
        sets,
      });
    } else {
      data.addExercise({ name, category, unit, timed, sets });
    }
    close();
  };

  return (
    <div className="h-full mt-1 px-2">
      <h3 className="text-xl mb-2">Add New Exercise</h3>
      <TextInput
        label="Name"
        onCommit={setName}
        initialValue={name}
        placeholder="Pull Ups"
      />
      <TextInput
        label="Category"
        onCommit={setCategory}
        initialValue={category}
        placeholder="Workout"
      />
      <Select label="Unit" options={units} value={unit} onCommit={setUnit} />
      <Toggle label="Timed" value={timed} onCommit={setTimed} />
      <Toggle label="Sets" value={sets} onCommit={setSets} />
      <Button onClick={onDone}>Save</Button>
    </div>
  );
}
