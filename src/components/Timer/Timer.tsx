import { useEffect, useState } from "preact/hooks";

export const printTimer = (date: Date) => {
  return `${String(date.getMinutes()).padStart(2, "0")}:${String(
    date.getSeconds(),
  ).padStart(2, "0")}:${String(date.getMilliseconds())
    .slice(0, 2)
    .padStart(2, "0")}`;
};

export default function Timer({
  className = "",
  onEnd,
}: {
  className?: string;
  onEnd: (details: { startTime: number; ellapsedTime: Date }) => any;
}) {
  const [id, setId] = useState<NodeJS.Timer>();
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
