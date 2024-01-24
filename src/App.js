import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Home from './pages/Home';
import './App.css';
import ProtectedRoute from './pages/ProtectedRoute';
const App = () => {
  return (

    <Router>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<SignUp />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Shop' element={<Shop/>}/>


        <ProtectedRoute path='/Dashboard' element={<Dashboard/>}/>
      
      </Routes>
    </Router>

  )
}

export default App;