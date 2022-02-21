import React from 'react'
import "./Home.scss"
import Marte from "../../Images/marte.png"
import {useTheme} from "../../context/ThemeContext"




const Home = () => {

  const blueTheme = useTheme();


  const homestyles = {
    color: !blueTheme ? "#004080" : "rgb(255, 73, 17)"
  }

  const subtitleStyles = {
    "backgroundColor": !blueTheme ? "#0a1b44b2" : "#441c0ab2",
    color: !blueTheme ? "#47a3ff" : "#ffb62e",
  }

  return (
    <>

    <div className='homeDiv'>     
      <h1 className='homeDiv__title'>Eyes on</h1>
      <h1 className='homeDiv__title'><span style={homestyles} className='homeDiv__title--red'>MARS</span></h1>
      <img className='homeDiv__image' src={Marte} alt='Mars'/>
      <div style={subtitleStyles} className='homeDiv__subtitle'>
        <h2>A sneak-peek into space and the red planet</h2>
        <p className='homeDiv__subtitle__p'>In this website you can look into the latest photos of the four different rovers that are everyday exploring Mars: Curiosity, Oportunity,Perseverance and Spirit.</p>
        <p className='homeDiv__subtitle__p'>You can also check the latest "pictures of the day" chosen by NASA</p>
      </div>
    
    </div>
    </>
  )
}

export default Home