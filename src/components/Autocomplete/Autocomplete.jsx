import { useEffect, useState } from "preact/hooks";
import TextInput from "../TextInput/TextInput";

export default function Autocomplete({ placeholder, getResults, onCommit }) {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!q) return;

    setResults(getResults(q));
  }, [q, getResults]);

  return (
    <div className="w-full">
      <TextInput
        label=""
        placeholder={placeholder}
        onChange={(query) => setQ(query)}
      />
      {!!results.length && (
        <div className="border p-3 pb-0 pt-1 rounded-b-lg pt-4 -mt-4 border-t-0">
          {results.map((result) => (
            <div
              className="p-3 border-b last:border-b-0"
              key={result.id}
              onClick={() => onCommit(result)}
            >
              {result.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
