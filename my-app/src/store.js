import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

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


// 리듀서를 보내야 함
const store = configureStore({
  reducer:{
    counter:counterSlice.reducer
  }
});

export default store;