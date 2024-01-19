import { Route, Routes } from "react-router-dom"
import Form from "./components/Form"
import Timer from "./components/Timer"

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/form" element={<Form />} />
    </Routes>
    </>
  )
}

export default App
