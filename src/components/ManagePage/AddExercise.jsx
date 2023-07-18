import { useState } from "preact/hooks";
import TextInput from "../TextInput/TextInput";
import Toggle from "../Toggle/Toggle";
import Select from "../Select/Select";
import Button from "../Button/Button";

const units = ["None", "kg", "cm", "metres"];

export default function AddExercise() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState(units[0]);
  const [timed, setTimed] = useState(false);
  const [sets, setSets] = useState(false);

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
      <Button>Save</Button>
    </div>
  );
}
