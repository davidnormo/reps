import { useState } from "preact/hooks";

export default function Toggle({ label, value = false, onCommit = () => {} }) {
  const [active, setActive] = useState(value);

  return (
    <div className="mb-3">
      <label className="relative inline-flex items-center cursor-pointer mb-2">
        <input
          type="checkbox"
          value={active}
          onChange={(e) => {
            setActive(e.target.checked);
            onCommit(e.target.checked);
          }}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </span>
      </label>
    </div>
  );
}
