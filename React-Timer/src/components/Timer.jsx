import { useEffect, useState } from 'react'
import styles from './Timer.module.css'
import formatTime from '../utils/formatTime';
import { useNavigate } from 'react-router-dom';

export default function Timer({newTime}) {
    let [time, setTime] = useState(newTime);
    let [paused, setPaused] = useState(true);
    let interval = null;
    const navigate = useNavigate();

    useEffect(() => {
        setPaused(false);
        interval = setInterval(() => {
            setTime(oldTime => oldTime - 1);
        }, 1000);
        return () => stopHandler();
    }, [time, newTime]);

    useEffect(() => {
        if (time <= 0) stopHandler();
    }, [time, newTime]);

    const controltHandler = () => {
        if (interval === null && time > 0) {
            setPaused(false);
            setTime(oldTime => oldTime - 1);
        } else {
            stopHandler();
        }
    }

    const stopHandler = () => {
        clearInterval(interval);
        setPaused(true)
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
          <button className={styles["time-btn"]} onClick={() => navigate('/form')}>Select Time</button>
        </div>
      </div>
    </>
  )
}