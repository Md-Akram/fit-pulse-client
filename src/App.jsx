import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Example from "./Components/Navbar2"


function App() {

  return (
    <>
      <Navbar />
      {/* <Example /> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
