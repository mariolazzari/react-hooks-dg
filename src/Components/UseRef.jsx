import { useState, useRef } from "react";

const UseRef = () => {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0);
  const inputRef = useRef();
  const timerId = useRef();

  const onChange = e => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  const focusInut = () => {
    inputRef.current.focus();
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds(prevSecs => prevSecs + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearTimeout(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      setSeconds(0);
      renders.current++;
    }
  };

  return (
    <>
      <hr />
      <h1>useRef</h1>
      <input
        ref={inputRef}
        type="text"
        value={randomInput}
        onChange={onChange}
      />
      <p>{randomInput}</p>

      <p>Renders: {renders.current}</p>

      <button onClick={focusInut}>Focus</button>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>

      <p>Timer: {seconds}</p>
    </>
  );
};

export default UseRef;
