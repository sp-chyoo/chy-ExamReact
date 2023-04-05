> 출처 : https://www.youtube.com/watch?v=yjuwpf7VH74
- 사전 작업
```console
> npm install redux react-redux
``` 
- Redux를 왜 쓰는지?
  - 계층적 컴포넌트 사이에 값을 전달하는 것이 매우 불편함
    ```
    컴포넌트 안에 컴포넌트 안에 컴포넌트 안에 컴포넌트가 있을 때 컴포넌트들 간에 데이터를 주고 받을 때 props 로 연결해야 합니다. 
    비우하자면, props라는 전선으로 컴포넌트들을 연결한 것이라고 할 수 있습니다.
    ```   
  - 불편함을 제거하는 방법 중에 하나로 탄생
    ```
    컴포넌트들도 블루투스나 와이파이처럼 무선으로 연결할 수 있다면 얼마나 편할까요?    
    이를 위해서는 통신을 중계할 기지국이 필요합니다. 
    리덕스의 스토어를 기지국으로 해서 컴포넌트들을 무선으로 연결할 수 있다면 생산성을 크게 높일 수 있습니다. 
    ```   
- 어떻게 쓰는가?
  - store : state를 저장하는 곳 (createStore를 이용하여 생성)
  - reducer : state를 어떻게 바꿀 것인가를 구현하는 함수 
  - provider : 컴포넌트(state를 어떤 컴포넌트들에게 제공할 것인가를 설정하는 울타리 역할)
  - useSelector : 어떤 state 값을 사용할 것인가 선택
  - useDispatch : state 값을 변경 (reducer 호출)