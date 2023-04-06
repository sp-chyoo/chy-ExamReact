import {createSlice} from '@reduxjs/toolkit';

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

export default counterSlice;
export const {up} = counterSlice.actions;