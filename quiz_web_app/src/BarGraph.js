import { useState, useEffect } from 'react';

function BarGraph({ scores, duration }) {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    setBars(scores.map((score, index) => ({
      score,
      height: 0,
      color: score >= 8 ? 'green' : 'red',
      bottom: 0 + index * 120
    })));
  }, [scores]);

  useEffect(() => {
    let animationStartTime = null;
    let requestId = null;

    const animateBars = (timestamp) => {
      if (!animationStartTime) {
        animationStartTime = timestamp;
      }

      const elapsedTime = timestamp - animationStartTime;

      setBars((prevBars) => prevBars.map((bar, index) => {
        const { score, bottom } = bar;
        const targetHeight = Math.min(score * 12, 120);
        const height = targetHeight * Math.min(elapsedTime / duration, 1);

        const color = score >= 8 ? 'linear-gradient(to top, #dcfa46, #7abf4c)' : 'linear-gradient(to top, #c63c23, #ffd633)';

        return {
          score,
          height,
          color,
          bottom: `0`,
        };
      }));

      if (elapsedTime < duration) {
        requestId = requestAnimationFrame(animateBars);
      }
    };

    requestId = requestAnimationFrame(animateBars);

    return () => cancelAnimationFrame(requestId);
  }, [duration]);

  const maxHeight = 120;
  const barWidth = 27.17;
  const barMarginRight = 50;

  return (
    <div style={{ position: 'relative', height: `${maxHeight}px`, marginLeft: '20px' }}>
      {bars.map((bar, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            bottom: `${bar.bottom}px`,
            left: `${index * (barWidth + barMarginRight)}px`,
            width: `${barWidth}px`,
            height: `${bar.height}px`,
            backgroundImage: bar.color,
            borderRadius: '0.3rem',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center'
          }}
        >
          <span
            style={{
              color: bar.score >= 8 ? '#79be4b' : '#c63c23',
              fontWeight: '400',
              fontSize: '0.7rem',
              marginBottom: '120px',
              fontFamily: 'system-ui',
            }}
          >
            {bar.score.toFixed(1)}/10
          </span>
        </div>
      ))}
    </div>
  );
}

export default BarGraph;
