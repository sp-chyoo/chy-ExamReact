> ## React Hook - useEffect() 예제 추가
> ### 출처 : https://www.youtube.com/watch?v=kyodvzc5GHU
- useEffect() 설명
  - 페이지가 렌더링 될 때 혹은 등록한 값이 변할 때 등록된 콜백 함수가 호출
  - useEffect() 함수가 종료될 때 리턴으로 동작 중지 같은 행동을 추가할 수 있음 
- useEffect()를 이용하는 예제
  - 타이머 컴포넌트가 나타날 때 - useEffect()가 동작되고, setInterval() 시작
  - 타이머 컴포넌트가 사라질 때 - useEffect()가 중지되고, setInterval() 중지