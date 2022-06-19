import { useState, useEffect, useCallback } from "react";

const UseCallback = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);

  const sum = useCallback(() => num1 + num2, [num1, num2]);
  const buildArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    // primitive type: rendered twice without callback
    setResult(sum());
    // reference type: endless loop without callback
    setResult(buildArray());
  }, [sum, buildArray]);

  return (
    <>
      <h1>useCallback</h1>
      <input
        type="text"
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
      />
      <h2>{userInput || "--"}</h2>
      <h3>{result}</h3>
    </>
  );
};

export default UseCallback;
