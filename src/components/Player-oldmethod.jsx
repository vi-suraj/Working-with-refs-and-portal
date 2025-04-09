import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handlePlayerName(e) {
    setIsSubmitted(false)
    setPlayerName(e.target.value);
  }

  function handleSubmit() {
    setIsSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {isSubmitted ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" value={playerName} onChange={handlePlayerName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}

