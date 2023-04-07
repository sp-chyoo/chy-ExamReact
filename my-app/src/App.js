import './App.css';
import {useEffect, useRef} from 'react';

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  },[]);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="user name"></input>
      <button>로그인</button>
    </div>
  );
}

export default App;
