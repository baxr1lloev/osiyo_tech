'use client';

import { useEffect, useState } from 'react';

export default function Counter(props) {
  const { targetNumber, duration = 2, suffix = '' } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetNumber;
    const increment = end / (duration * 60);
    let frame;

    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(step);
      } else {
        setCount(end);
        cancelAnimationFrame(frame);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [targetNumber, duration]);

  return <span>{count}{suffix}</span>;
}
