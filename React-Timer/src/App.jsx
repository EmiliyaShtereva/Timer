import { Route, Routes } from "react-router-dom"
import Form from "./components/Form"
import Timer from "./components/Timer"
import { useState } from "react"

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
