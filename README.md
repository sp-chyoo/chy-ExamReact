
> ## 출처 : https://www.youtube.com/watch?v=XfUF9qLa3mU
> 개념 설명과 예제 소스 추가
- useCallback 개념
  - 콜백 함수 자체를 Memorization 함
  - 파라미터 : 콜백함수, 의존성 배열
    - 의존성 배열 내부의 값이 변경될 때만 호출
- 콜백 함수를 useEffect에 바로 사용 할 경우 컴포넌트 렌더링마다 같이 렌더링 됨
  - 콜백 함수와 useEffect에 사용할 수 있도록 useCallback 사용 

