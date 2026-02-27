import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyState from './components/MyState.jsx'
import MyEffect from './components/MyEffect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyState />
    <MyEffect/>
  </StrictMode>,
)
