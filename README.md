> ## 출처 : https://www.youtube.com/watch?v=VxqZrL4FLz8&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=3
- 내용 정리 추가
  - 결론
    - 렌더링을 없이 값을 유지할 때 사용
  - 상태 값과 차이점
    - useRef 값 변경 시에는 해당 컴포넌트가 렌더링이 되지 않음
    - 상태 값은 변경 시 해당 컴포넌트가 렌더링이 됨
  - 일반 변수와 차이점
    - useRef 값은 렌더링 시에도 값이 유지가 됨
    - 일반 변수는 렌더링 시 초기화 됨 
  - 렌더링 횟수를 표시하고 싶을 때
    - useEffect()와 상태 값을 사용 할 경우 무한루프에 빠짐
    ```javascript
    const [count, setCount] = useState(0);
    const [renderCount, setRenderCount] = useState(1);
    
     useEffect(() =>{
      setRenderCount(renderCount + 1);
     });
    ```
    - 상태값 대신 useRef() 사용 시 간편하게 사용 가능