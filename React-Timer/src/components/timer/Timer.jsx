import { useEffect, useState } from 'react'
import styles from './Timer.module.css'
import { useNavigate } from 'react-router-dom';
import formatTime from '../../utils/formatTime';

export default function Timer({ newTime }) {
  let [time, setTime] = useState(newTime);
  let [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();
  let interval;

  useEffect(() => {
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(oldTime => oldTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (time <= 0) {
      clearInterval(interval);
      setIsRunning(false);
    };
  }, [time]);


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
          {isRunning
            ? (<button className={styles["control-btn"]} onClick={() => setIsRunning(false)}>Pause</button>)
            : (<button className={styles["control-btn"]} onClick={() => setIsRunning(true)}>Start</button>)
          }
          <button className={styles["time-btn"]} onClick={() => navigate('/form')}>Select Time</button>
        </div>
      </div>
    </>
  )
}