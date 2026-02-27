import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import "../src/index.css"
import Home from './pages/Home/index.jsx'
import Products from './pages/Products/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
