import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import { NavbarSimple } from "./Components/Navbar2"


function App() {

  return (
    <>
      <NavbarSimple />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
