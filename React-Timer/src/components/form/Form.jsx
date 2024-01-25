import styles from './Form.module.css'
import useForm from '../../hooks/useForm';

const formInitialState = {
    hours: '',
    minutes: '',
    seconds: '',
}

export default function Form({changeTime}) {
    const { values, onChange, onSubmit } = useForm(formInitialState, changeTime);

  return (
    <>
      <div className={styles["form"]}>
        <h1>Update Time</h1>
        <form onSubmit={onSubmit}>
            <div className={styles["wrapper"]}>
                <div className={styles["time"]}>
                    <p>HOURS</p>
                    <input 
                        type="number" 
                        min="0" 
                        max="99" 
                        maxLength="2"
                        name="hours" 
                        className={styles["hours"]} 
                        placeholder="00"
                        value={values.hours}
                        onChange={onChange}
                        data-testid='hoursInput'
                    />
                </div>

                <div className={styles["time"]}>
                    <h2 className={styles["seperation"]}>:</h2>
                </div>

                <div className={styles["time"]}>
                    <p>MINUTES</p>
                    <input 
                        type="number" 
                        min="0" 
                        max="59" 
                        maxLength="2"
                        name="minutes" 
                        className={styles["minutes"]}
                        placeholder="00"
                        value={values.minutes}
                        onChange={onChange}
                        data-testid='minutesInput'
                    />
                </div>

                <div className={styles["time"]}>
                    <h2 className={styles["seperation"]}>:</h2>
                </div>

                <div className={styles["time"]}>
                    <p>SECONDS</p>
                    <input 
                        type="number" 
                        min="0" 
                        max="59" 
                        maxLength="2"
                        name="seconds" 
                        className={styles["seconds"]}
                        placeholder="00"
                        value={values.seconds}
                        onChange={onChange}
                        data-testid='secondsInput'
                    />
                </div>
            </div>
            <button type="submit" className={styles["submit-btn"]}>New Time</button>
        </form>
    </div>
    </>
  )
}