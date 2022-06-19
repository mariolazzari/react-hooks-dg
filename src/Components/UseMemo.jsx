import { useState, useEffect, useMemo, useCallback } from "react";

// no need to use useCallback for this outsige functional component
/*
const fib = n => {
  if (n <= 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};
*/

const getArray = () => {
  for (let i = 0; i < 1000000000; i++) {}
  return ["Mario", "Lazzari"];
};

const UseMemo = () => {
  const [userNumber, setUserNumber] = useState(0);
  const [randomInput, setRandomInput] = useState("");

  // memoize function call
  const fib = useCallback(n => {
    if (n <= 1) {
      return 1;
    }

    return fib(n - 1) + fib(n - 2);
  }, []);

  // memoize value
  const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);
  const myArray = useMemo(() => getArray(), []);

  useEffect(() => {
    console.log("new fib number", fibNumber);
    console.log("new array", myArray);
  }, [fibNumber, myArray]);

  return (
    <>
      <hr />
      <h1>useMemo</h1>
      <label>Fibonacci sequence</label>
      <input
        type="number"
        value={userNumber}
        onChange={e => setUserNumber(+e.target.value)}
      />
      <p>Number: {fibNumber || "--"}</p>

      <label>Random inout</label>
      <input
        type="text"
        value={randomInput}
        onChange={e => setRandomInput(e.target.value)}
      />
    </>
  );
};

export default UseMemo;
