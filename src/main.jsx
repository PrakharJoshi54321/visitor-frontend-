import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'
import AboutUs from './components/AboutUs/AboutUs.jsx/'
import Signin from './components/Signin/Signin.jsx'
import Signup from './components/Signup/Signup.jsx'
// import Signup from './components/Signup/Signup.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path='/' element={<Layout />}>
      <>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/about' element={<AboutUs />} />
      <Route path='/Signin' element={<Signin />} />
      <Route path='/SignUp' element={<Signup />} />

      </>

    // </Route>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>

  </React.StrictMode>,
)
