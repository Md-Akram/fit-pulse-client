import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NotFound from './Pages/NotFound.jsx'
import Home from './Pages/Home.jsx'
import Gallery from './Pages/Gallery.jsx'
import Classes from './Pages/Classes.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Community from './Pages/Community.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Trainers from './Pages/Trainer.jsx'
import TrainerDetails from './Pages/TrainerDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='trainers' element={<Trainers />} />
        <Route path='classes' element={<Classes />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='community' element={<Community />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='trainerDetails' element={<TrainerDetails />} />
      </Route>

      <Route path='*' element={<NotFound />}></Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
