import React from 'react'
import "./styles.scss"
import { useTheme} from '../../context/ThemeContext'
import { Link } from 'react-router-dom';

const Navigation = () => {

  const blueTheme = useTheme();

  const menustyles = {
    color: !blueTheme ? "#004c7e" : "#7e3d00",
    background:!blueTheme ? "#53c0ff" : "#ffac53",
    "borderRight": !blueTheme ? "5px solid #004c7e" :  "5px solid #7e3d00"
  }

  return (

<nav style={menustyles} role="navigation">
  <div id="menuToggle">

    <input type="checkbox" />

    <span></span>
    <span></span>
    <span></span>
    

    <ul id="menu" style={menustyles}>
      <Link to="/"><li>Home</li></Link>
      <h5>Mars Rovers:</h5>
      <Link to="/perseverance"><li>Perseverance</li></Link>
      <Link to="/curiosity"><li>Curiosity</li></Link>
      <Link to="/opportunity"><li>Opportunity</li></Link>
      <Link to="/spirit"><li>Spirit</li></Link>
      <h5>Other pics:</h5>
      <Link to="/otherpics"><li>Astronomy pics</li></Link>
    </ul>
  </div>
</nav>
  )
}

export default Navigation