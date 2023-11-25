import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NotFound from './Pages/NotFound.jsx'
import Home from './Pages/Home.jsx'
import Gallery from './Pages/Gallery.jsx'
import Trainer from './Pages/Trainer.jsx'
import Classes from './Pages/Classes.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Community from './Pages/Community.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='trainer' element={<Trainer />} />
        <Route path='classes' element={<Classes />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='community' element={<Community />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
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
