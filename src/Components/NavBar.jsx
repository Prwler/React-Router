import React from 'react'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">BookBox</a>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className='list-item'><Link to="/">Home</Link></li>
                <li className='list-item'><Link to="/books">Books</Link></li>
                <li className='list-item'><Link to="/contact">Contact</Link></li>
                <li className='list-item'><Link to="/NewBook">NewBook</Link></li>
            </ul>
        </div>
  </div>
</nav>
    </>
  )
}

export default NavBar
