import React, { useState, useEffect } from 'react';
import styles from '../styles/counter.module.css';

function Counter({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animate = () => {
      setCount(0);
      const totalMs = duration * 1000;
      const intervalTime = totalMs / end;
      let current = 0;
      const timer = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= end) clearInterval(timer);
      }, intervalTime);
    };

    animate(); // Start immediately
    const resetInterval = setInterval(animate, 6000); // Restart every 4s

    return () => clearInterval(resetInterval);
  }, [end, duration]);

  return (
    <div className={styles.counter}>
      <h3 className={styles.display}>
        {count}
        <span className={styles.target}><b></b></span>
      </h3>
    </div>
  );
}

export default Counter;
