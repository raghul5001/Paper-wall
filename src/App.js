import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Register from './Components/Pages/Register'
import Login from './Components/Pages/Login'
import Blog from './Components/Pages/Blog'
import Cart from './Components/Pages/Cart'
import HomePage from './Components/Pages/HomePage'
import Payment from './Components/Pages/Payment'
import ProductDetail from './Components/Pages/ProductDetail'
import ProductListing from './Components/Pages/ProductListing'

function App() {
  return (
    <div>
         <Router>
          <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/productdetail' element={<ProductDetail/>}/>
            <Route path='/productlisting' element={<ProductListing/>}/>
            
          </Routes>
          </Router>
    </div>
  )
}

export default App
