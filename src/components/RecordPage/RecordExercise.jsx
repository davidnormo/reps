import { useState } from "preact/hooks";
import useData from "../../hooks/useData";
import useNav from "../../hooks/useNav";
import Timer, { printTimer } from "../Timer/Timer";

export default function RecordExercise() {
  const { exercise, recording = false, setHistoryState } = useNav();
  const data = useData();

  const reps = data.reps.filter((r) => r.exerciseId === exercise.id);

  const [set, setSet] = useState(1);
  const { name, timed } = exercise;

  const timerStopped = ({ startTime, ellapsedTime }) => {
    data.addRep(exercise, {
      startTime,
      ellapsedTime: ellapsedTime.getTime(),
      set,
    });
    setTimeout(() => {
      setHistoryState({ recording: false, exercise });
    }, 10);
  };

  const startTimer = () => {
    setHistoryState({ recording: !recording, exercise });
  };

  return (
    <div className="pt-20 text-center">
      <h3 className="text-4xl">{name}</h3>
      {
        <div
          className="mt-16 mb-4 text-3xl rounded-full flex justify-center items-center bg-gray-200 w-[75vw] h-[75vw]"
          onClick={!recording ? startTimer : () => {}}
        >
          {recording && timed ? <Timer onEnd={timerStopped} /> : "START"}
        </div>
      }
      {!!reps.length && (
        <div className="flex flex-col w-32 mx-auto">
          {reps.map((rep, i) => (
            <div key={i} className="text-left">
              Rep {i + 1}:{" "}
              {printTimer(new Date(0, 0, 0, 0, 0, 0, rep.details.ellapsedTime))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
