import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import AppLayout from './layout/AppLayout'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'

const App = () => {

  const [userDetails, setUserDetails] = useState(null);

  const updateUserDetails = (details) => {
    setUserDetails(details);
  };
  return (
    <Routes>
      <Route path="/" element={<AppLayout> <h1 className="text-2xl text-center mt-10">Welcome to the Home Page</h1> </AppLayout>} />

      <Route path="/login" element={
        userDetails 
        ? <Navigate to='/dashboard' /> 
        : <AppLayout> 
          <Login updateUserDetails={updateUserDetails} /> 
          </AppLayout>
        } />

      <Route path="/register" element={<AppLayout> <Register /> </AppLayout>} />

      <Route path='/dashboard' element={
        userDetails
        ? <Dashboard />
        : <Navigate to='/login' />
      } />
      
      <Route path="*" element={<AppLayout> <h1 className="text-2xl text-center mt-10">404 Not Found</h1> </AppLayout>} />
    </Routes>
  )
}

export default App