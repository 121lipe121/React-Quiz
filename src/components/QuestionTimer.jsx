import { useEffect, useState } from "react";

export default function QuestionTimer({ timer, handleTimer, mode }) {
  const [remainingTimer, setRemainingTimer] = useState(timer);

  useEffect(() => {
    const timeOut = setTimeout(handleTimer, timer);

    return () => {
      clearInterval(timeOut);
    };
  }, [timer, handleTimer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTimer((prevRemainingTimer) => prevRemainingTimer - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timer}
      value={remainingTimer}
      className={mode}
    />
  );
}
