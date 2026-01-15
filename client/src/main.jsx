import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import Leaflet CSS globally
import "leaflet/dist/leaflet.css";

import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
   <BrowserRouter>
  <App></App>
  <ToastContainer></ToastContainer>
  </BrowserRouter>
)
