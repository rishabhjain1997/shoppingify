import React from "react"
import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import History from "./pages/History"
import Items from "./pages/Items"
import Statistics from "./pages/Statistics"

const App = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <div className="ml-24 bg-base-200 min-h-screen px-10">
          <Routes>
            <Route path="/" element={<Items />} />
            <Route path="/history" element={<History />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
