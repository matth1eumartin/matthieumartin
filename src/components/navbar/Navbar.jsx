import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div class='nav'>
        <nav>
            <a href="#about" class = "active">About</a>
            <a href="#projects" class = "active">Projects</a>
            <a href="#achievements" class = "active">Achievements</a>
            <a href="#workexperience" class = "active">Work Experience</a>
            <a href="#education" class = "active">Education</a>
        </nav>
    </div>
  )
}

export default Navbar