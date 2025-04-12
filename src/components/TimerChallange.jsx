import { useRef, useState } from "react";
import Result from "./Result";

// if you want some value to be remembered to start and stop on click you can use useRef because it store the value of the component and will remeber it after the component get re-executed

export default function TimerChallange({ title, targetTime }) {
  let timer = useRef();

  let dialog = useRef();

  const [timerExpiered, setTimerExpiered] = useState(false);
  const [timerStarted, setTimerstarted] = useState(false);

  function handleTimer() {
    timer.current = setTimeout(() => {
      setTimerExpiered(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setTimerstarted(true);
  }

  function handleClearTimer() {
    clearTimeout(timer.current);
  }

  return (
    <>
     <Result ref={dialog} result={"lots"} targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpiered && <p>You Lost</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleClearTimer : handleTimer}>{timerStarted ? "Stop" : "Start"} Challange</button>
        </p>
        <p className="">{timerStarted ? "Time is running" : "Timer is inactive"}</p>
      </section>
    </>
  );
}
