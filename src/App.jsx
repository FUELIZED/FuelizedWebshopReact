import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Contact} from './pages/Contact.jsx'
import { Gallery } from './pages/Gallery.jsx' 
import { Music } from './pages/Music.jsx'
import { Shop } from './pages/Shop.jsx'
import { Labels } from './pages/Labels.jsx'
import { Freedownloads } from './pages/Freedownloads.jsx'
import { Hoodies } from './pages/Hoodies.jsx'
import { Tshirts } from './pages/Tshirts.jsx'
import { Musicreleases } from './pages/Musicreleases.jsx'
import { Goodiebags } from './pages/Goodiebags.jsx'
import { Myaccount } from './pages/Account.jsx'
import { Accountdetails } from './pages/Accountdetails.jsx'
import { Downloads } from './pages/Downloads.jsx'
import { Myorders } from './pages/Myorders.jsx'
import { Termsandconditions } from './pages/Termsandconditions.jsx'
import { Privacypolicy } from './pages/Privacypolicy.jsx'
import { Events } from './pages/Events.jsx'
import { NotFound } from './pages/NotFound.jsx'

document.title = "Fuelized";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="/gallery" element={<Gallery />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/music" element={<Music />} />
      <Route path="/music/releases" element={<Musicreleases/>} />
      <Route path="/music/freedownloads" element={<Freedownloads/>} />
      <Route path="/music/labels" element={<Labels/>} />

      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/hoodies" element={<Hoodies/>} />
      <Route path="/shop/tshirts" element={<Tshirts/>} />
      <Route path="/shop/goodiebags" element={<Goodiebags/>} />

      <Route path="/account" element={<Myaccount/>} />
      <Route path="/account/accountdetails" element={<Accountdetails/>} />
      <Route path="/account/downloads" element={<Downloads/>} />
      <Route path="/account/myorders" element={<Myorders/>} />

      <Route path="/termsandconditions" element={<Termsandconditions/>} />
      <Route path="/privacypolicy" element={<Privacypolicy/>} />
      <Route path="/events" element={<Events/>} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App