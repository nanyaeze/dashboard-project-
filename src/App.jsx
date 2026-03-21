import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import ForgotPassword from "./pages/forgot-password"
import Dashboard from "./pages/dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Replace with Landing later */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App