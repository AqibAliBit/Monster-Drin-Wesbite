import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Story from './Pages/Storys/Story'
import Drinks from './Pages/Drinks/Drinks'
import Contact from './Pages/Contact/Contact'
import Collab from './Pages/Collab/Collab'
import Order from './Pages/Order/Order'
import Addcart from './Pages/AddCart/Addcart'
const App = () => {


 
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Story' element={<Story/>}/>
      <Route path='/Drinks' element={<Drinks/>}/>
      <Route path='/Order' element={<Order/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Collab' element={<Collab/>}/>
      <Route path='/Addcart/:id' element={<Addcart/>}/>
    </Routes>
  )
}

export default App