import { useState } from "preact/hooks";
import useData, { Exercise } from "../../hooks/useData";
import useNav from "../../hooks/useNav";
import Timer, { printTimer } from "../Timer/Timer";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import Link from "../Link/Link";

export default function RecordExercise() {
  const {
    exercise,
    recording = false,
    setHistoryState,
  } = useNav<{ exercise: Exercise; recording?: boolean }>();
  const data = useData();
  const [unitValue, setUnitValue] = useState("");

  const reps = data.reps.filter((rep) => {
    return (
      rep.exerciseId === exercise.id &&
      ((exercise.sets && rep.details.set === undefined) || !exercise.sets)
    );
  });

  let lastSetNum = 0;
  if (exercise.sets) {
    for (let i = 0; i < data.reps.length; i++) {
      const rep = data.reps[i];
      if (rep.exerciseId === exercise.id) {
        lastSetNum = Math.max(lastSetNum, rep.details.set || 0);
      }
    }
  }

  const { name, timed, sets, unit } = exercise;

  const timerStopped = ({
    startTime,
    ellapsedTime,
  }: {
    startTime: number;
    ellapsedTime: Date;
  }) => {
    data.addRep(exercise, {
      startTime,
      ellapsedTime: ellapsedTime.getTime(),
    });
    setTimeout(() => {
      setHistoryState({ recording: false, exercise });
    }, 10);
  };

  const startTimer = () => {
    setHistoryState({ recording: !recording, exercise });
  };

  const endSet = () => {
    data.endSet(exercise, lastSetNum + 1);
  };

  const finishExercise = () => {
    data.addRep(exercise, { startTime: Date.now(), unitValue });

    if (sets) {
      endSet();
    }
  };

  return (
    <div className="pt-20 text-center flex flex-col justify-between">
      <h3 className="text-4xl">{name}</h3>
      {unit !== "none" && (
        <div className="flex justify-center items-center mt-3">
          <TextInput
            initialValue={unitValue}
            textRight
            className="w-16 mb-0"
            onCommit={setUnitValue}
          />
          <div className="ml-3">{unit}</div>
        </div>
      )}
      {timed && (
        <div
          className="my-10 text-3xl rounded-lg flex justify-center items-center bg-gray-200 p-5 min-width-50"
          onClick={!recording ? startTimer : () => {}}
        >
          {recording && timed ? <Timer onEnd={timerStopped} /> : "START"}
        </div>
      )}
      {!!reps.length && (
        <>
          <div className="flex flex-col text-right items-end pr-4 font-mono">
            {reps.map((rep, i) => (
              <div key={i} className="min-w-fit whitespace-nowrap">
                Rep {i + 1}:{" "}
                {printTimer(
                  new Date(0, 0, 0, 0, 0, 0, rep.details.ellapsedTime),
                )}
              </div>
            ))}
          </div>
          {sets && (
            <Button className="mt-4" onClick={endSet}>
              End Set
            </Button>
          )}
        </>
      )}
      <Link
        state={{ exercise }}
        href="exerciseDetails"
        onClick={finishExercise}
        className="bg-gray-300 text-black p-2 rounded"
      >
        Finish
      </Link>
    </div>
  );
}
