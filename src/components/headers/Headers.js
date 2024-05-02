import React from 'react'
import "./headers.scss"

import { Link } from 'react-router-dom'

import logo from "../../assets/images/logo.png"
import foot from "../../assets/images/foot.png"

function Header() {
  return (
    <div className='headers'>
      <nav className="container nav">
        <Link to={`/`} className="nav__logo">
          <img src={logo} alt="" />
          <img src={foot} alt="" />
        </Link>
        <ul className="nav__list">
            <li className="nav__item"><a href="#" className="nav__link">Desitnations</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Hotels</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Flights</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Bookings</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Flights</a></li>
            <li className="nav__item"><Link to="/admin" className="nav__link">Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header