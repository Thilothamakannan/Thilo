import { useState } from "react";
export const Counter = () => {
  const [curr, update] = useState(0);
  const [wicket, updateWicket] = useState(0);
  return (
    <div>
      <p>Runs:${curr}</p>
      <p>Wicket:${wicket}</p>
      <button onClick={() => update(curr + 1)}>1 runs</button>
      <button onClick={() => update(curr + 2)}>2 runs</button>
      <button onClicsk={() => update(curr + 4)}>4 runs</button>
      <button onClick={() => update(curr + 6)}>6 runs</button>
      <button onClick={() => updateWicket(wicket + 1)}>1Wicket</button>
    </div>
  );
};

export default Counter;
