import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useForm(initialValues, changeTime) {
    const [values, setValues] = useState(initialValues, changeTime);
    const navigate = useNavigate();

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: Number(e.target.value),
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let newTime = (values.hours * 3600) + (values.minutes * 60) + values.seconds;
        changeTime(Number(newTime));
        navigate('/');
    }

    return {
        values,
        onChange,
        onSubmit
    }
}