import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

export default function TextInput({
  initialValue,
  label = "",
  placeholder = "",
  onCommit = () => {},
  onChange = () => {},
  className = "",
  textRight = false,
}: {
  initialValue: string;
  label?: string;
  placeholder?: string;
  onCommit?: (value: string) => any;
  onChange?: (value: string) => any;
  className?: string;
  textRight?: boolean;
}) {
  const [value, setValue] = useState(initialValue);
  const id = label.replace(" ", "");
  return (
    <div className={`${className} mb-3 text-left`}>
      {label && (
        <label
          for={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        value={value}
        onInput={(e) => {
          setValue(e.currentTarget.value);
          onChange(e.currentTarget.value);
        }}
        type="text"
        id={id}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          textRight ? "text-right" : "text-left"
        }`}
        placeholder={placeholder}
        onBlur={(e) => onCommit(e.currentTarget.value)}
      />
    </div>
  );
}
