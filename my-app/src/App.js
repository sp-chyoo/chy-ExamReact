import './App.css';
//import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import store from './store';
import {up} from './counterSlice';

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
      dispatch(up(2));
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
