import { Route, Routes } from 'react-router-dom'
import  "bootstrap/dist/css/bootstrap.css";
import './App.css'

import { ShoppingCartProvider } from './context/ShoppingCartContext'

// =========== import components =============
import { Navbar } from './components'
import Signup from './pages/Signup'
import Login from './pages/Login'

// =========== import pages =============
import { About, Home, Store } from './pages'



function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      {/* ================== routes ================ */}
      <main className='main container mx-auto px-1 pt-3 bg-transparent'>
        <Routes>
        <Route path="/signup" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home  />} />
          <Route path='/store' element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </ShoppingCartProvider>
  )
}

export default App
