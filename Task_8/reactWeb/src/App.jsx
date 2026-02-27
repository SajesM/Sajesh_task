import { useState } from 'react'
import Home from './pages/Home/index.jsx'
import Navbar from './shared/layout/Navbar'
import Products from './pages/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/Products/ProductDetails/index.jsx'
import Cart from './shared/ui/cart/index.jsx'

function App() {
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
    <Navbar setOpen={setOpen}/>
    <Cart open={open} setOpen={setOpen} /> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Products/:id' element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
