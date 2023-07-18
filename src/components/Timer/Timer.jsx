import { useEffect, useState } from "preact/hooks";

export const printTimer = (date) => {
  return `${String(date.getMinutes()).padStart(2, "0")}:${String(
    date.getSeconds(),
  ).padStart(2, "0")}:${String(date.getMilliseconds())
    .slice(0, 2)
    .padStart(2, "0")}`;
};

export default function Timer({ className = "", onEnd }) {
  const [id, setId] = useState(null);
  const [startTime] = useState(Date.now());
  const [ellapsedTime, setEllapsedTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      const ms = Math.round((Date.now() - startTime) / 10) * 10;
      setEllapsedTime(new Date(ms));
    }, 10);
    setId(id);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div
      className={`text-4xl font-mono ${className}`}
      onClick={() => {
        clearInterval(id);
        onEnd({ startTime, ellapsedTime });
      }}
    >
      {printTimer(ellapsedTime)}
    </div>
  );
}
