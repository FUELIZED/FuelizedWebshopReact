import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Gallery } from './pages/Gallery.jsx' 
import { Music } from './pages/Music.jsx'
import { NotFound } from './pages/NotFound.jsx'

document.title = "Fuelized";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/music" element={<Music />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App