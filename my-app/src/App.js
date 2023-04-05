import './App.css';

/**
 * 컴포넌트 함수
 * @returns 버튼과 숫자를 전달   
 */
function Counter(){
  return <div>
    <button>+</button>0
  </div>
}

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

export default App;
