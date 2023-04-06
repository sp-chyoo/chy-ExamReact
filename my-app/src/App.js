import './App.css';
import React, {useState} from 'react';
import Timer from './component/Timer';

/**
 * 버튼 클릭 시 토글되어, 타이머 컴포넌트는 나타내거나 사라지는 기능을 추가
 * 타이머 컴포넌트가 나타날 때 - useEffect()가 동작되고, setInterval() 시작
 * 타이머 컴포넌트가 사라질 때 - useEffect()가 중지되고, setInterval() 중지
 * @returns App 컴포넌트
 */
function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer></Timer>}
      <button onClick={() => {
        setShowTimer(!showTimer);
      }}>Toggle Timer</button>
    </div>
  );
}

export default App;
