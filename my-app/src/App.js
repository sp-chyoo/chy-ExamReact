import { useState } from 'react';
import './App.css';
import { useCallback, useState } from 'react';
import Box from './Box';

import React, { useState, useMemo, useEffect } from 'react';

function App() {
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);

  // 버튼 클릭 시 영향을 받지 않도록 수정
  const createBoxStyle = useCallback(() => {
    return {
          backgroundColor: 'pink',
          width: `${size}px`,
          height: `${size}px`
        };
  }, [size]);

  // const createBoxStyle = () => {
  //   return {
  //     backgroundColor: 'pink',
  //     width: `${size}px`,
  //     height: `${size}px`
  //   };
  // };

  return (
    <div 
      style={{
        background: isDark ? 'black' : 'white' ,
      }}
    >
      <input
        type="number"
        value={size}
        onChange={(e) => {setSizes(e.target.value)}}
      >
      </input>
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle}></Box>

    </div>
  );

}
 
export default App;
 