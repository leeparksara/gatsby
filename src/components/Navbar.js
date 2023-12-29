import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
      <nav>
          <h2>Saras's portfolio</h2>
          <div className='links'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/portfolio'>Portfolio Projects</Link>
          </div>

  </nav>
  )
}

export default Navbar