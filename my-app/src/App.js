import './App.css';
import React, {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

  const increaseCountState = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>State : {count}</p>
      <button onClick={increaseCountState}>State 올려</button>

    </div>
  );
}

export default App;
