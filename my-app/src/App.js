import './App.css';
import React, {useState, useRef, useEffect} from 'react';

function App() {

  const [count, setCount] = useState(1);
  const countRef = useRef(0); // {current:0}, 접근 : countRef.current

  useEffect(() => {
    countRef.current = countRef.current + 1;
    console.log(`렌더 카운트 : ${countRef.current}`);
  });

  const increaseCountState = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={increaseCountState}>Count 올려</button>
    </div>
  );
}

export default App;
