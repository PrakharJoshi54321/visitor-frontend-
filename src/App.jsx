import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './components/Signin/Signin'
import Navbar from './components/Navbar/Navbar'
import Signup from './components/Signup/Signup'
import AboutUs from './components/AboutUs/AboutUs/'
import VisitorsForm from './components/User/VisitorsForm'
import Final from './components/User/Final'
import AdminDashboard from './components/AdminDashboard/AdminDashboard'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <VisitorsForm/> */}
      <AdminDashboard/>
      
    </>
  )
}

export default App
