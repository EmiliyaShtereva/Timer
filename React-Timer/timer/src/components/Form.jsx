import styles from './Form.module.css'

export default function Form() {
  return (
    <>
      <div className={styles["form"]}>
        <h1>Update Time</h1>
        <form>
            <div className={styles["wrapper"]}>
                <div className={styles["time"]}>
                    <p>HOURS</p>
                    <input 
                        type="number" 
                        min="0" 
                        max="99" 
                        maxlength="2"
                        name="hours" 
                        className={styles["hours"]} 
                        placeholder="00"
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
                        maxlength="2"
                        name="minutes" 
                        className={styles["minutes"]}
                        placeholder="00"
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
                        maxlength="2"
                        name="seconds" 
                        className={styles["seconds"]}
                        placeholder="00"
                    />
                </div>
            </div>
            <button type="submit" className={styles["submit-btn"]}>New Time</button>
        </form>
    </div>
    </>
  )
}