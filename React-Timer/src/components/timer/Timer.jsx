import styles from './Timer.module.css'
import { useNavigate } from 'react-router-dom';
import formatTime from '../../utils/formatTime';
import useTimer from '../../hooks/useTimer';

export default function Timer({ newTime }) {
  let [time, isRunning, setIsRunning] = useTimer(newTime);
  const navigate = useNavigate();

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
          {isRunning && time > 0
            ? (<button className={styles["control-btn"]} onClick={() => setIsRunning(false)}>Pause</button>)
            : (<button className={styles["control-btn"]} onClick={() => setIsRunning(true)}>Start</button>)
          }
          <button className={styles["time-btn"]} onClick={() => navigate('/form')}>Select Time</button>
        </div>
      </div>
    </>
  )
}