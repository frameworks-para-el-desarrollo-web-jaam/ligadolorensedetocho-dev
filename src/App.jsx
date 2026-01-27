import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Equipos from "./pages/Equipos";
import Calendario from "./pages/Calendario";
import Estadisticas from "./pages/Estadisiticas";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () =>{
  return (
    <div className="h-screen overflow-x-hidden bg-liga-1">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/teams" element={<Equipos/>} />
          <Route path="/stats" element={<Estadisticas/>} />
          <Route path="/calendar" element={<Calendario/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
