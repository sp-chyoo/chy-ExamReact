> 출처 : https://www.youtube.com/watch?v=9wrHxqI6zuM&t=714s
- 기본 설치
```console
> npm install redux react-redux
> npm install @reduxjs/toolkit
```
- React Redux Toolkit 설명 추가 및 소스 분석
  - configureStore로 store를 만듬   
  - createSlice로 작은 store를 만듬   
  - actionCreator 함수를 자동으로 만듬   
  - immer.js가 내장 되어 있어서 불변하게 데이터를 처리하지 않아도 됨
- 등장 이유
  - 설정 복잡
  - 미들웨어 설치도 복잡
  - 반복되는 코드 많음
  - 불변성 유지의 어려움
- Store를 나누고 싶어짐
  - 작은 스토어를 slice라고 함
