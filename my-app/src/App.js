import './App.css';
import {useState} from 'react';

const initialNames = () => {
  console.log('call initialNames()');
  return ['홍길동','김철수'];
}

function App() {

  // 맨처음 렌더링 할때만 렌더링 하고 싶다면, 초기화 함수를 콜백 형태로 부르면 됨.
  //const [names, setNames] = useState(['홍길동','김철수']);
  const [names, setNames] = useState(()=> {
    return initialNames();
  });
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
 
  const handleUpload = () => {
    setNames((preState) => {
      return [input, ...preState];
    });
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
