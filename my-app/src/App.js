import './App.css';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

// state를 저장하는 store 생성
// reducer 함수 필요
const store = createStore(reducer);

/**
 * 스토어 안의 state를 어떻게 바꿀 것인가를 결정하는 함수
 * @param {*} currentState 현재 state
 * @param {*} action 어떻게 바꿀것인가를 알려주는 값
 * @returns 새로운 state
 */
function reducer(currentState, action){
  // 기본 state를 1로 초기화
  if (currentState === undefined){
    return {
      number : 1,
    }
  }
  const newState = {...currentState};

  if(action.type === 'PLUS'){
    newState.number++;
  }

  return newState;
}

function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>      
    </div>
  );
}

function Left1(props) {
  return <div>
    <h1>Left1</h1>
    <Left2></Left2>
  </div>
}

function Left2(props) {
  return <div>
    <h1>Left2</h1>
    <Left3></Left3>
  </div>
}

function Left3(props) {

  // state 값 중에 어떤 값을 사용할 것인가?
  const number = useSelector((state) => state.number);
  return <div>
    <h1>Left3 : {number}</h1>
  </div>
}

function Right1(props) {
  return <div>
    <h1>Right1</h1>
    <Right2></Right2>
  </div>
}

function Right2(props) {
  return <div>
    <h1>Right2</h1>
    <Right3></Right3>
  </div>
}

function Right3(props) {
  // state를 변경하기 위해 필요한 함수
  const dispach = useDispatch();
  return <div>
    <h1>Right3</h1>
    <input type='button' value="+" onClick={()=>{
      dispach({type: 'PLUS'}); // PLUS라는 액션을 reducer에게 전달
     }}></input>
  </div>
}


export default App;
