import './App.css';
//import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

// /**
//  * action 객체의 값에 따라 state 값을 변경하는 함수
//  * @param {*} state 상태 객체
//  * @param {*} action 액션 객체
//  * @returns 변경된 state 객체
//  */
// function reducer(state, action){
//   if (action.type === 'up') {
//     return {...state, value:state.value + action.payload};
//   }

//   return state;
// }

// // state 초기화
// const initialSate = {value:0};

// // store 생성
// const store = createStore(reducer, initialSate);

// 작은 스토어(카운터 슬라이스) 생성
const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {value : 0},
  reducers: {
    up:(state, action)=> {
      state.value = state.value + action.payload;
    }
  }
});

// 리듀서를 보내야 함
const store = configureStore({
  reducer:{
    counter:counterSlice.reducer
  }
});

/**
 * 컴포넌트 함수
 * @returns 버튼과 숫자를 전달   
 */
function Counter(){
  const count = useSelector(state => {
    return state.counter.value; // store의 reducer에 설정된 이름
  });
  const dispatch = useDispatch();
  
  return <div>
    <button onClick={() => {
      //dispatch({type:'counter/up', payload:2});
      dispatch(counterSlice.actions.up(2));
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
