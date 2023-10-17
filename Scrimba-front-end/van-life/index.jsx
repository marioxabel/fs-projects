import React, {useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
// Pages
import Home from './src/pages/Home/Home'
import About from './src/pages/About/About'
import Vans from './src/pages/Vans/Vans'
import VanDetail from './src/pages/Vans/VanDetail'
import Dashboard from './src/pages/Host/Dashboard'
import Income from './src/pages/Host/Income'
import Reviews from './src/pages/Host/Reviews'
// Components
import Layout from './src/Components/Layout/Layout'
import HostLayout from './src/Components/HostLayout/HostLayout'
// Server
import './server'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetail />} />
            <Route path='host' element={<HostLayout />} >
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
         </Route>
        </Routes>
      </BrowserRouter>
    </>  
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
