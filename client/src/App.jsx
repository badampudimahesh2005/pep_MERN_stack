import {  Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import AppLayout from './layout/AppLayout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout> <h1 className="text-2xl text-center mt-10">Welcome to the Home Page</h1> </AppLayout>} />
      <Route path="/login" element={<AppLayout> <Login /> </AppLayout>} />
      <Route path="/register" element={<AppLayout> <Register /> </AppLayout>} />
    </Routes>
  )
}

export default App