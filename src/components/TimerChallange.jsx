import { useRef, useState } from "react";
import Result from "./Result";

// if you want some value to be remembered to start and stop on click you can use useRef because it store the value of the component and will remeber it after the component get re-executed

export default function TimerChallange({ title, targetTime }) {
  let timer = useRef();

  let dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  // function handleTimer() {
  //   timer.current = setTimeout(() => {
  //     setTimerExpiered(true);
  //     dialog.current.open();
  //   }, targetTime * 1000);
  //   setTimerstarted(true);
  // }

  // function handleClearTimer() {
  //   clearTimeout(timer.current);
  // }

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function resetTimer() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleTimer() {
    timer.current = setInterval(() => {
      setTimeRemaining((currentTimeRemaining) => currentTimeRemaining - 10);
    }, 10);
  }

  function handleClearTimer() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <Result ref={dialog} result={"lots"} targetTime={targetTime} reset={resetTimer} remainingTime={timeRemaining} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleClearTimer : handleTimer}>{timerIsActive ? "Stop" : "Start"} Challange</button>
        </p>
        <p className="">{timerIsActive ? "Time is running" : "Timer is inactive"}</p>
      </section>
    </>
  );
}
