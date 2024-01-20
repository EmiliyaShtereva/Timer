import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import Timer from "./components/timer/Timer";
import Form from "./components/form/Form";

function App() {
    let [newTime, setNewTime] = useState(0);

    const changeTime = (time) => {
        setNewTime(time);
    }

  return (
    <>
    <Routes>
        <Route path="/" element={<Timer newTime = {newTime} />} />
        <Route path="/form" element={<Form changeTime = {changeTime}/>} />
    </Routes>
    </>
  )
}

export default App
