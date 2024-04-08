import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'
import Men from './Men'
import Electronics from './Electronics'
import Jwellery from './Jwellery'
import Women from './Women'

const Navebar = () => {
  return (
    <nav className="navbar">
      <div className="container">
      
        <div className="logo">
          {/* <Brand /> */}
          <div style={{color:"red"}}>Online Shopping</div>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/jwellery">Jwellery</NavLink>
            </li>
            <li>
              <NavLink to="/electronics">Electronics</NavLink>
            </li>
              <li>
              <NavLink to="/men">Mens Cloths</NavLink>
            </li>
            <li>
              <NavLink to="/women">Womens Cloths</NavLink>
            </li>
          </ul>
        </div>
          <Routes>
            <Route path='/' element={<Home></Home>}> </Route>
             <Route path='/men' element={<Men></Men>}> </Route>
             <Route path='/women' element={<Women></Women>}> </Route>
             <Route path='/jwellery' element={<Jwellery></Jwellery>}> </Route>
              <Route path='/electronics' element={<Electronics></Electronics>}> </Route>
      
        </Routes>
      </div>
    </nav>
  )
}

export default Navebar