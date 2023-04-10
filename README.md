> ## 출처 : https://www.youtube.com/watch?v=e-CnI8Q5RY4&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=6
- 사용법 정리
- 컴포넌트 성능 최적화 시 이용
  - useMemo
  - useCallback
- useMemo 개념
  - memo : Memoization
    - 동일한 값을 반복적으로 계산할 경우 처음 계산한 결과 값을 기억해 반환해 주는 기능
  - 파리미터 : 콜백 함수, 배열(의존성 배열)
    - 배열의 값이 변할 때만 호출
  - 예제 설명
    - 시간이 오래 걸리는 컴포넌트를 useMemo를 이용하여 렌더링 시간을 아낌
    - useEffect()에는 객체 타입을 바로 넣으면 안됨, 주소값이 렌더링 시마다 바뀌기 때문
      - 그럴때 사용하는 것이 useMemo()

