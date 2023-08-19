import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CircleContainer=styled.div`
position: relative;
  width: 125px;
  height: 125px;
  `;

const CircleFrame=styled.svg`
position: absolute;
top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  width: 125px;
  height: 125px;
`;

const CircleBg=styled.circle`
fill: none;
  stroke: #e5e7eb;
  stroke-width: 13;
`;

const Progress=styled.circle`
fill: none;
  stroke: #7abf4c;
  stroke-width: 13;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
  transition: stroke-dashoffset 1s ease-out;
`;

const CircleBar = ({ percentage, duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= percentage) {
          clearInterval(intervalId);
          return prevProgress;
        } else {
          return prevProgress + 1;
        }
      });
    }, (duration / percentage) * 100);
    return () => clearInterval(intervalId);
  }, [percentage, duration]);

  const circumference = 2 * Math.PI * 50;

  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <CircleContainer>
      <CircleFrame>
        <CircleBg cx="57" cy="66" r="50" />
        <Progress
          className="circle-progress"
          cx="59"
          cy="57"
          r="50"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={dashOffset}
        />
      </CircleFrame>
    </CircleContainer>
  );
};

export default CircleBar;
