import { useEffect, useState } from "react";

export default function useTimer(initialTime) {
    let [time, setTime] = useState(initialTime);
    let [isRunning, setIsRunning] = useState(false);
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

    return [time, isRunning, setIsRunning];
}