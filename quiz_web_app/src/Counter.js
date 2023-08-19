import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const C=styled.p`
--tw-text-opacity: 1;
    color: rgb(36 35 76/var(--tw-text-opacity));
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 25px;
    position: absolute;
    margin-left: 8px;
    margin-top: 12px;
`;

function Counter({ duration }) {
  const [counter, setCounter] = useState(0);
  const startTimeRef = useRef(null);
  const requestRef = useRef(null);
  const startValue = 0;
  const endValue = 80.8;

  useEffect(() => {
    startTimeRef.current = Date.now();
    requestRef.current = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  function updateCounter() {
    const elapsedTime = Date.now() - startTimeRef.current;
    const progress = elapsedTime / duration;

    if (progress < 1) {
      setCounter(startValue + progress * (endValue - startValue));
      requestRef.current = requestAnimationFrame(updateCounter);
    } else {
      setCounter(endValue);
    }
  }

  return <C>{counter.toFixed(1)}</C>;
}

export default Counter;
