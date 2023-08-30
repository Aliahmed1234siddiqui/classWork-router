import React from 'react'
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom' 
import Home from '../pages/home'
import Services from '../pages/services'
import About from '../pages/about'
import Profile from '../pages/profile'
export default function ARouter() {
  return (
    <div>
      <Router>
    <nav>

        <Link to='/'>home </Link>
        <Link to='about'>about </Link>
        <Link to='services'>services </Link>
        <Link to='profile'>profile</Link>
    </nav>
    <Routes>
<Route path='/' element={<Home />} ></Route>
<Route path='services' element={<Services />} ></Route>
<Route path='about' element={<About/>} ></Route>
<Route path='profile/:id' element={<Profile/>} ></Route>



    </Routes>
     

      </Router>

      
    </div>
  )
}
