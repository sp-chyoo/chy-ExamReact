import './App.css';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

/**
 * action 객체의 값에 따라 state 값을 변경하는 함수
 * @param {*} state 상태 객체
 * @param {*} action 액션 객체
 * @returns 변경된 state 객체
 */
function reducer(state, action){
  if (action.type === 'up') {
    return {...state, value:state.value + action.payload};
  }

  return state;
}

// state 초기화
const inialSate = {value:0};

// store 생성
const store = createStore(reducer, inialSate);

/**
 * 컴포넌트 함수
 * @returns 버튼과 숫자를 전달   
 */
function Counter(){
  const count = useSelector(state => state.value);
  const dispatch = useDispatch();
  return <div>
    <button onClick={() => {
      dispatch({type:'up', payload:2});
    }}
    >+</button>{count}
  </div>
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
    
  );
}

export default App;
