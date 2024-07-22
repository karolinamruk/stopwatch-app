import React, { useState, useEffect } from 'react';
import FormattedTime from './FormattedTime';
import styles from './App.module.scss';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  // const start = () => {
  //   setTimer(
  //     setInterval(() => {
  //       setTime((prevValue) => prevValue + 1);
  //     }, 1)
  //   );
  // };

  const start = () => {
    const startTime = Date.now() - time;
    setTimer(
      setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10) // Ustawienie interwału na 10 ms
    );
  };

  const stop = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timer]);

  return (
    <div className={styles.app}>
      <FormattedTime time={time} />
      <button className={styles.button} onClick={start}>
        Start
      </button>
      <button className={styles.button} onClick={stop}>
        Stop
      </button>
      <button className={styles.button} onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default App;
