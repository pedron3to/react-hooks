import { useState} from 'react';

export function UseStateHook() {
  const [counter, setCounter] = useState(0);

  function handlePlus() {
    setCounter((previousState) => previousState + 1 );
  }

  function handleMinus() {
    setCounter((previousState) => previousState - 1 );
  }

  return(
    <div>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}