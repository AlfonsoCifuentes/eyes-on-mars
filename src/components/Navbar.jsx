import React from 'react'
import {useTheme} from "../context/ThemeContext"



const Navbar = () => {

    const blueTheme = useTheme();

    const navstyle = {
        "backgroundColor": !blueTheme ? "#061331d3" : "#311406d3"

    }

    const logostyle = {
        color: !blueTheme ? "#47a3ff" : "#ffb62e"
    }

  return (
    <div style={navstyle} className="navBar">Eyes on<span style={logostyle} className="navBar__logo">MARS</span></div>
  )
}

export default Navbar