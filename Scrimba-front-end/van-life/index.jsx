import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
// Pages
import Home from './src/pages/Home/Home'
import About from './src/pages/About/About'
import Vans from './src/pages/Vans/Vans'
import Login from './src/pages/Login/Login'
import VanDetail from './src/pages/Vans/VanDetail'
import Dashboard from './src/pages/Host/Dashboard'
import Income from './src/pages/Host/Income'
import HostVans from './src/pages/Host/HostVans'
import HostVanDetail from './src/pages/Host/HostVanDetail'
import HostVanInfo from './src/pages/Host/HostVanInfo'
import HostVanPhotos from './src/pages/Host/HostVanPhotos'
import HostVanPricing from './src/pages/Host/HostVanPricing'
import Reviews from './src/pages/Host/Reviews'
import NotFound from './src/pages/NotFound/NotFound'
// Components
import Layout from './src/Components/Layout/Layout'
import HostLayout from './src/Components/HostLayout/HostLayout'
import AuthRequired from './src/Components/AuthRequired'
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
            <Route path='Login' element={<Login />} />
            <Route path='vans/:id' element={<VanDetail />} />
            
            <Route element={<AuthRequired />}>
              <Route path='host' element={<HostLayout />} >
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path='vans' element={<HostVans />} />
                <Route path='vans/:id' element={<HostVanDetail />} >
                    <Route index element={<HostVanInfo />} />
                    <Route path="pricing" element={<HostVanPricing />} />
                    <Route path="photos" element={<HostVanPhotos />} />
                </Route>
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
         </Route>
        </Routes>
      </BrowserRouter>
    </>  
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
