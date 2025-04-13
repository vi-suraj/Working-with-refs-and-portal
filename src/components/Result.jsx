import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Result = forwardRef(function ({ targetTime, remainingTime, reset }, ref) {
  const dialog = useRef();

  const lost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="result-modal" ref={dialog}>
      {lost && <h2>You Lost</h2>}
      {!lost && <h2>Your Score: {score}</h2>}
      <p>
        Your Target Time Was <strong>{targetTime}</strong>
      </p>
      <p>
        You Stopped The Timer With <strong>{formattedTime} Second Left</strong>
      </p>
      <form action="dialog" onSubmit={reset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Result;
