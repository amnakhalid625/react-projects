// import Game from "./components/Game"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Play from "./components/Play"
import Gaame from "./components/Gaame"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Header />} />
    <Route path="/play" element={<Play />} />
    <Route path="/game" element={<Gaame />} />
    <Route path="/footer" element={<Footer />} />
  </Routes>
 </BrowserRouter>
 </>
  )
}

export default App
