import { useEffect, useState } from 'react'
import styles from './App.module.css'

const formatTime = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time / 3600) * 60) % 60;
    let seconds = time % 60;

    return {
        hours : hours.toString().padStart(2, '0'),
        minutes : minutes.toString().padStart(2, '0'),
        seconds : seconds.toString().padStart(2, '0')
    }
}

function App() {
    let interval = null;
    let [time, setTime] = useState(186);

    useEffect(() => {
        interval = setInterval(() => {
            setTime(oldTime => oldTime - 1);
        }, 1000);
        return () => stopHandler();
    }, [time]);

    useEffect(() => {
        if (time <= 0) stopHandler();
    }, [time]);

    let controltHandler = () => {
        if (interval === null) {
            setTime(oldTime => oldTime - 1);
        } else {
            stopHandler();
        }
    }

    let stopHandler = () => {
        clearInterval(interval);
        interval = null;
    }

  return (
    <>
      <div className={styles["conteiner"]}>
        <div className={styles["timer"]}>
          <div className={styles["time"]}>
            <p>HOURS</p>
            <h2 id={styles["hours"]}>{formatTime(time).hours}</h2>
          </div>

          <div className={styles["time"]}>
            <h2 className={styles["seperation"]}>:</h2>
          </div>

          <div className={styles["time"]}>
            <p>MINUTES</p>
            <h2 id={styles["minutes"]}>{formatTime(time).minutes}</h2>
          </div>

          <div className={styles["time"]}>
            <h2 className={styles["seperation"]}>:</h2>
          </div>

          <div className={styles["time"]}>
            <p>SECONDS</p>
            <h2 id={styles["seconds"]}>{formatTime(time).seconds}</h2>
          </div>
        </div>

        <div className={styles["buttons"]}>
          <button className={styles["control-btn"]} onClick={controltHandler}>Start</button>
          <button className={styles["time-btn"]}>Select Time</button>
        </div>
      </div>
    </>
  )
}

export default App
