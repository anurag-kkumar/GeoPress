import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home'
import './App.css'
import Title from './Pages/Title'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import PrivateRoute from './Components/PrivateRoute'
import Newsapp from './Pages/Newsapp'
import MapNews from './Pages/MapNews'
import Profile from './Pages/Profile'
import Aboutus from './Components/HomePage/Aboutus'
import NotFound from './Pages/NotFound'
import ForgotPassword from './Pages/ForgotPassword'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <div  >



      <Routes>
        <Route path='/about' element={<Aboutus></Aboutus>}></Route>

        <Route path='/' element={<Title></Title>}></Route>

        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />}></Route>

        <Route path='/signup' element={<Signup setLoggedIn={setLoggedIn} />}></Route>

        <Route path='/newsapp' element={
          <PrivateRoute isLoggedIn={isLoggedIn} ><Newsapp></Newsapp></PrivateRoute>
        }>
        </Route>

        <Route path='/pro' element={<Profile></Profile>}></Route>

        <Route path='/newsmap' element={<MapNews></MapNews>}></Route>

        <Route path='/home' element={
          <PrivateRoute isLoggedIn={isLoggedIn} ><Home /></PrivateRoute>
        }>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
       
      </Routes>

    </div>

  )
}

export default App
