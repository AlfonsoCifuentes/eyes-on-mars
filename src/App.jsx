import './App.scss';
import Home from './pages/Home/Home';
import {useTheme, useThemeUpdate} from "./context/ThemeContext"
import ThemeButton from './components/ThemeButton';
import Navigation from './components/Navigation/Navigation';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Perseverance from './pages/Perseverance/Perseverance';
import Curiosity from './pages/Curiosity/Curiosity';
import OtherPics from './pages/OtherPics/OtherPics';
import Navbar from './components/Navbar';
import Opportunity from './pages/Opportunity/Opportunity';
import Spirit from "./pages/Spirit//Spirit"



const App = () => {

  const blueTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const appstyles = {
    "backgroundColor": !blueTheme ? "#004080" : "rgb(255, 73, 17)",
    color: !blueTheme ? "rgb(17, 247, 255)" : "rgb(251, 255, 17)",
    "boxShadow": !blueTheme ? "0 0 10px rgb(17, 247, 255)" : "0 0 10px rgb(251, 255, 17)"
  }

  const navistyles = {
    background: !blueTheme ? "#004080" : "rgb(255, 73, 17)"
  }

 

  return (
      <>

      <Router>
      <ThemeButton style={appstyles} onClick={toggleTheme}>Switch Colors</ThemeButton>   
      <Navigation style={navistyles} />
      <Navbar />
        <Routes>
           
          <Route path="/" element={<Home />}/>
          <Route path="perseverance" element={<Perseverance/>}/>
          <Route path="curiosity" element={<Curiosity />}/>
          <Route path="otherpics" element={<OtherPics />}/>
          <Route path="opportunity" element={<Opportunity />}/>
          <Route path="spirit" element={<Spirit />}/>
        
        </Routes>

      </Router>
      </>
 
  );
}

export default App;
