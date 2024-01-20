import { useState } from 'react';
import styles from './Form.module.css'
import { useNavigate } from 'react-router-dom';

const formInitialState = {
    hours: '',
    minutes: '',
    seconds: '',
}

export default function Form({changeTime}) {
    const [formValues, setFormValues] = useState(formInitialState);
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: Number(e.target.value),
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let time = (formValues.hours * 3600) + (formValues.minutes * 60) + formValues.seconds;
        changeTime(time);
        navigate('/')
    }

  return (
    <>
      <div className={styles["form"]}>
        <h1>Update Time</h1>
        <form onSubmit={submitHandler}>
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
                        value={formValues.hours}
                        onChange={changeHandler}
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
                        value={formValues.minutes}
                        onChange={changeHandler}
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
                        value={formValues.seconds}
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <button type="submit" className={styles["submit-btn"]}>New Time</button>
        </form>
    </div>
    </>
  )
}