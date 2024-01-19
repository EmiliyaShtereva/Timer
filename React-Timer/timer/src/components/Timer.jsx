import { useEffect, useState } from 'react'
import styles from './Timer.module.css'
import formatTime from '../utils/formatTime';

export default function Timer({changeComponent}) {
    let [time, setTime] = useState(186);
    let [paused, setPaused] = useState(false);
    let interval = null;

    useEffect(() => {
        setPaused(false);
        interval = setInterval(() => {
            setTime(oldTime => oldTime - 1);
        }, 1000);
        return () => stopHandler();
    }, [time]);

    useEffect(() => {
        if (time <= 0) stopHandler();
    }, [time]);

    let controltHandler = () => {
        if (interval === null && time > 0) {
            setPaused(false);
            setTime(oldTime => oldTime - 1);
        } else {
            setPaused(true)
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
          <button className={styles["control-btn"]} onClick={controltHandler}>{paused ? 'Start' : 'Pause'}</button>
          <button className={styles["time-btn"]}>Select Time</button>
        </div>
      </div>
    </>
  )
}