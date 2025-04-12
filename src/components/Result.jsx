import { forwardRef } from "react";

const Result = forwardRef(function ({ result, targetTime }, ref) {
  return (
    <dialog className="result-modal" ref={ref}>
      <h2>You {result}</h2>
      <p>Your Target Time Was <strong>{targetTime}</strong></p>
      <p>You Target Time Result <strong>Score Is X</strong></p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Result;
