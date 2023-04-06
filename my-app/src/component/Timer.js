import React, {useEffect} from 'react';

/**
 * useEffect()를 이용하는 예제
 * 타이머 컴포넌트가 나타날 때 - useEffect()가 동작되고, setInterval() 시작
 * 타이머 컴포넌트가 사라질 때 - useEffect()가 중지되고, setInterval() 중지
 * @param {*} props 파라미터
 * @returns 
 */
const Timer = (props) => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 동작 중...');
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.');
        }
    }, []);

    return <div>
        <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
}

export default Timer;