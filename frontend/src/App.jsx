import { useState } from 'react'
import Login from './components/auth/Login'
import Dashboard from './components/dashboard/Dashboard'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    isLoggedIn ? <Dashboard /> : <Login />
  )
}

export default App
/*
Cambiar rutas
 
*/
