import { useState } from "preact/hooks";

export default function Select({ label, options, value, onCommit }) {
  const [selected, setSelected] = useState(value);
  const id = label.replace(" ", "");
  return (
    <div className="mb-3">
      <label
        for={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          setSelected(e.target.value);
          onCommit(e.target.value);
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} selected={opt === selected}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
