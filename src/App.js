import React from "react"
import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import History from "./pages/History"
import Items from "./pages/Items"
import Statistics from "./pages/Statistics"
import CartMenu from "./components/CartMenu"
import { CartProvider } from "./context/cart/CartContext"

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Sidebar />
        <div className="ml-24 bg-base-200 min-h-screen pl-10 flex justify-between">
          <Routes>
            <Route path="/" element={<Items />} />
            <Route path="/history" element={<History />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
          <div className="ml-8">
            <CartMenu />
          </div>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
